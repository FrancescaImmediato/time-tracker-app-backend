import { hashSync } from 'bcrypt';

export class User {
  id: number;
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = hashSync(password, 10);
  }
}
