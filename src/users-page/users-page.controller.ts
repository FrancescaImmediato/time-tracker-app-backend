import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersPageService } from './users-page.service';
import { CreateUsersPageDto } from './dto/create-users-page.dto';
import { UpdateUsersPageDto } from './dto/update-users-page.dto';

@Controller('users-page')
export class UsersPageController {
  constructor(private readonly usersPageService: UsersPageService) {}

  @Post()
  create(@Body() createUsersPageDto: CreateUsersPageDto) {
    return this.usersPageService.create(createUsersPageDto);
  }

  @Get()
  findAll() {
    return this.usersPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersPageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersPageDto: UpdateUsersPageDto) {
    return this.usersPageService.update(+id, updateUsersPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersPageService.remove(+id);
  }
}
