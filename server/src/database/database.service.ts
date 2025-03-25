/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // USER
  async createUser(username: string, password: string) {
    return await this.user.create({ data: { username, password } });
  }
  async findUserByNickname(username: string) {
    return await this.user.findUnique({ where: { username } });
  }

  // COIN
  async createCoin(name: string, lastPrice: number, valueHistory: number[]) {
    return await this.coin.create({
      data: { name, lastPrice, valueHistory },
    });
  }

  async findCoinByName(name: string) {
    return await this.coin.findUnique({ where: { name } });
  }

  // TRANSACTION
  async createTransaction(
    userId: number,
    coinId: number,
    amount: number,
    type: 'buy' | 'sell',
  ) {
    return await this.transaction.create({
      data: { userId, coinId, amount, type },
    });
  }

  //===================

  // async onApplicationShutdown(signal?: string) {
  //   await this.$disconnect();
  //   // await this.$client.$disconnect();
  //   console.log(`Application Shutdown with signal: ${signal || 'unknown'}`);
  // }
  // enableShutdownHooks(app: INestApplication) {
  //   // this.$on('beforeExit', async () => {
  //   //   await app.close();
  //   // });
  //   process.on('beforeExit', async () => {
  //     await app.close();
  //   })
  // }
}
