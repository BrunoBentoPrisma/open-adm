import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SingInDto } from './dto/sing-in';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(singInDto: SingInDto) {
    const user = await this.usersService.findOnByEmail(singInDto.email);
    if (!user || !(await compare(singInDto.password, user.password)))
      throw new UnauthorizedException('Email ou senha inválidos');

    const payload = { id: user.id, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
