import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { comparePasswords, hashPassword } from 'utils/bcrypt';

// TODO: reset password

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(username: string, password: string): Promise<boolean> {
    const user = await this.prismaService.prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) throw new Error('User not found');
    return await comparePasswords(password, user.password);
  }

  async register(username: string, password: string) {
    // TODO: add return type
    const hash = await hashPassword(password);
    return await this.prismaService.prisma.user.create({
      data: { username, password: hash },
    });
  }
}
