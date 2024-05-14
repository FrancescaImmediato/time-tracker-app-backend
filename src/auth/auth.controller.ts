import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const { email, password } = createUserDto;
      const userExists = await this.authService.userExists(email);
      if (userExists) {
        return res.status(HttpStatus.BAD_REQUEST).json({ error: 'User account with email already exists.' });
      }
      await this.authService.createUser(email, password);
      return res.status(HttpStatus.CREATED).send();
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error.' });
    }
  }
}
