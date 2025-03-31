import { NestFactory } from '@nestjs/core';
import { PrismaService } from 'prisma/prisma.service';
import { AppModule } from './app.module';

const prismaService = new PrismaService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8080',
    methods: 'GET,POST,PUT,DELETE',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .catch((e) => console.error(e))
  .finally(() => {
    void prismaService.prisma.$disconnect();
  });
