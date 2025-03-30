import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { TransactionModule } from './transaction/transaction.module';
import { CoinModule } from './coin/coin.module';

@Module({
  imports: [AuthModule, DatabaseModule, TransactionModule, CoinModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
