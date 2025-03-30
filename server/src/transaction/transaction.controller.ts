import { Body, Controller, Post } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('create')
  create(@Body() transactionDto: TransactionDto) {
    return this.transactionService.create(
      transactionDto.buyerWalletAddress,
      transactionDto.sellerWalletAddress,
      transactionDto.coinName,
      transactionDto.quantity,
    );
  }
}
