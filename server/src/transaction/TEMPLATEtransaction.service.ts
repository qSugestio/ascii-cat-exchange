/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/*
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}
  async buyCoins(
    sellerWalletAddress: string,
    buyerWalletAddress: string,
    coinName: string,
    quantity: number,
  ) {
    const buyerWallet = await this.prismaService.prisma.wallet.findUnique({
      where: { address: buyerWalletAddress },
    });
    const sellerWallet = await this.prismaService.prisma.wallet.findUnique({
      where: { address: sellerWalletAddress },
    });

    if (!buyerWallet || !sellerWallet) throw new Error('Кошелёк не найден');

    // 2. найти кони у продавца
    const sellerCoin = await this.prismaService.prisma.coinInWallet.findFirst({
      where: { address: sellerWallet.address, coinName },
    });

    if (!sellerCoin || sellerCoin.quantity < quantity)
      throw new Error('Недостаточно средств у продавца');

    // 3 получить цену коина
    const coin = await this.prismaService.prisma.coin.findUnique({
      where: { name: coinName },
    });
    if (!coin) throw new Error('Коин не найден');

    const totalCost = coin.lastPrice * quantity;

    // 4. проверить, достаточно средств у покупателя
    if (buyerWallet.balance < totalCost)
      throw new Error('Недостаточно средств у покупателя');

    /// 5. выполнить покупку в транзакции
    await this.prismaService.prisma.$transaction(async (prisma) => {
      // 5.1 обновление кошелька у покупателя
      await prisma.wallet.update({
        where: { address: buyerWallet.address },
        data: { balance: { decrement: totalCost } },
      });
      // 5.2 обновление кошелька у продавца
      await prisma.wallet.update({
        where: { address: sellerWallet.address },
        data: { balance: { increment: totalCost } },
      });
      // 5.3 уменьшить количество коинов и удаление поля у продавца
      await prisma.coinInWallet.update({
        where: { id: sellerCoin.id },
        data: { quantity: { decrement: quantity } },
      });
      await prisma.coinInWallet.delete({ where: { id: sellerCoin.id } });
      // 5.4 увеличение количества коинов у покупателя
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
      // 5.5 записать транзакцию
      await prisma.transaction.create({
        data: {
          sellerWalletAddress: sellerWallet.address,
          buyerWalletAddress: buyerWallet.address,
          transactionDate: new Date(),
          coins: { connect: { id: sellerCoin.id } },
        },
      });
    });
    return { message: 'Покупка успешно завершена' };
  }
  // async createTransaction(
  //   sellerWalletAddress: string,
  //   buyerWalletAddress: string,
  //   coinName: string,
  //   amount: number,
  // ) {
  //   return await this.databaseService.createTransaction(
  //     sellerWalletAddress,
  //     buyerWalletAddress,
  //     coinName,
  //     amount,
  //   );
  // }
}
*/
