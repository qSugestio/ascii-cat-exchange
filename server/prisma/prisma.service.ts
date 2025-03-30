import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
}
