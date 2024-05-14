import { Body, Controller, Post, HttpStatus, HttpException, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './user.service';

@Controller('api/auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() body: { email: string; password: string }, @Res() res: Response) {
    try {
      await this.usersService.createUser(body.email, body.password);
      return res.status(HttpStatus.CREATED).send();
    } catch (error) {
      if (error.message === 'User account with email already exists.') {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
}
