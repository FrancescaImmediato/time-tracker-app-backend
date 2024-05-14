import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [];

  async userExists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }

  async createUser(email: string, password: string): Promise<void> {
    this.users.push({ email, password });
  }
}
