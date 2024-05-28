import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';

interface UserInterface {
  id?: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  // private users: UserInterface[] = [];
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>){
  };

  async createUser(email: string, password: string): Promise<UserInterface> {
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new Error('User account with email already exists.');
    }

    const hashedPassword = await hash(password, 10);
    const newUser = {
      email,
      password: hashedPassword,
    };

    await this.userRepository.save({
      email,
      hashedPassword,
      firstName: '',
      lastName: '',
    });
    return newUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async validatePassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (user && (await compare(password, user.hashedPassword))) {
      return user;
    }
    return null;
  }

  
}
