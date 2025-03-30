import { NestFactory } from '@nestjs/core';
import { PrismaService } from 'prisma/prisma.service';
import { AppModule } from './app.module';

const prismaService = new PrismaService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .catch((e) => console.error(e))
  .finally(() => {
    void prismaService.prisma.$disconnect();
  });
