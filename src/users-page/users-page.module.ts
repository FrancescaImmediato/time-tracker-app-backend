import { Module } from '@nestjs/common';
import { UsersPageService } from './users-page.service';
import { UsersPageController } from './users-page.controller';

@Module({
  controllers: [UsersPageController],
  providers: [UsersPageService],
})
export class UsersPageModule {}
