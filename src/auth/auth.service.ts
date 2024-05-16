import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { hash, compare } from 'bcrypt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  private jwtOptions = {
    secret: this.configService.get<string>('JWT_SECRET'),
    verify: { algorithms: ['HS256'] },
  };

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.userService.findByEmail(email);
      if (user && (await compare(password, user.hashedPassword))) {
        return user;
      }
      return null;
    } catch (error) {
      console.error('Error in validateUser:', error);
      throw error;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  validate(payload) {
    return { userId: payload.sub, username: payload.email };
  }
}
