import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';

@Module({
  controllers: [CoinController],
  providers: [CoinService, PrismaService],
})
export class CoinModule {}
