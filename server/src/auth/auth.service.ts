/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async register(dto: AuthUserDto) {
    const { username, password } = dto;
    // TODO: Здесь можно добавить хеширование пароля, например, с bcrypt

    try {
      const user = await this.databaseService.createUser(username, password);
      return { id: user.id, username: username };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      )
        throw new ConflictException(
          'Пользователь с таким именем уже существует!',
        );
      if (error instanceof Prisma.PrismaClientValidationError)
        throw new ConflictException('Пропущен аргумент');
      throw error;
    }
  }

  async login(dto: AuthUserDto) {
    const { username, password } = dto;

    const user = await this.databaseService.findUserByNickname(username);
    if (!user || user.password !== password)
      throw new Error('Invalid credentials!'); //TODO: Простая проверка, лучше использовать bcrypt
    return { id: user.id, username: user.username };
  }
}
