import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    buyerWalletAddress: string,
    sellerWalletAddress: string,
    coinName: string,
    quantity: number,
  ) {
    // GET WALLETS
    const buyerWallet = await this.prismaService.prisma.wallet.findUnique({
      where: { address: buyerWalletAddress },
    });
    const sellerWallet = await this.prismaService.prisma.wallet.findUnique({
      where: { address: sellerWalletAddress },
    });
    if (!buyerWallet || !sellerWallet) throw new Error('Кошёлек не найден');

    // GET COIN IN SELLER WALLET
    const sellerCoin = await this.prismaService.prisma.coinInWallet.findFirst({
      where: { address: sellerWalletAddress, coinName },
    });
    if (!sellerCoin) throw new Error('У продавца отсутствует коин');

    // GET COIN
    const coin = await this.prismaService.prisma.coin.findUnique({
      where: { name: coinName },
    });
    if (!coin) throw new Error('Коин не найден');

    const totalCost = coin.lastPrice * quantity;

    if (buyerWallet.balance < totalCost)
      throw new Error('Недостаточно средств у покупателя');

    // CREATE TRANSACTION
    await this.prismaService.prisma.$transaction(async (prisma) => {
      // WALLETS UPDATE
      await prisma.wallet.update({
        where: { address: buyerWalletAddress },
        data: { balance: { decrement: totalCost } },
      });
      await prisma.wallet.update({
        where: { address: sellerWalletAddress },
        data: { balance: { increment: totalCost } },
      });
      // COINS ПЕРЕДАЧА
      await prisma.coinInWallet.update({
        where: { id: sellerCoin.id },
        data: { quantity: { decrement: quantity } },
      });
      await prisma.coinInWallet.delete({ where: { id: sellerCoin.id } });

      const buyerCoins = await prisma.coinInWallet.findFirst({
        where: { address: buyerWallet.address, coinName },
      });
      if (buyerCoins) {
        await prisma.coinInWallet.update({
          where: { id: buyerCoins.id },
          data: { quantity: { increment: quantity } },
        });
      } else {
        await prisma.coinInWallet.create({
          data: {
            address: buyerWallet.address,
            dateOfPurchase: [new Date()],
            unitPrice: coin.lastPrice,
            coinName,
            quantity,
            totalCost,
          },
        });
      }
      await prisma.transaction.create({
        data: {
          sellerWalletAddress: sellerWallet.address,
          buyerWalletAddress: buyerWallet.address,
          transactionDate: new Date(),
          coins: { connect: { id: sellerCoin.id } },
        },
      });
    });
    return 'Покупка успешно завершена';
  }
}
