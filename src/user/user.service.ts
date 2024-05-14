import { Injectable } from '@nestjs/common';

interface User {
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(email: string, password: string): Promise<void> {
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new Error('User account with email already exists.');
    }

    const newUser: User = { email, password };
    this.users.push(newUser);
  }
}
