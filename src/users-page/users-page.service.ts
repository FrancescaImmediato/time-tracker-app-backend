import { Injectable } from '@nestjs/common';
import { CreateUsersPageDto } from './dto/create-users-page.dto';
import { UpdateUsersPageDto } from './dto/update-users-page.dto';

@Injectable()
export class UsersPageService {
  create(createUsersPageDto: CreateUsersPageDto) {
    return 'This action adds a new usersPage';
  }

  findAll() {
    return `This action returns all usersPage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersPage`;
  }

  update(id: number, updateUsersPageDto: UpdateUsersPageDto) {
    return `This action updates a #${id} usersPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersPage`;
  }
}
