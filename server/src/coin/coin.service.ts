import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CoinService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(coinName: string) {
    return await this.prismaService.prisma.coin.create({
      data: {
        name: coinName,
        lastPrice: 1,
      },
    });
  }
}
