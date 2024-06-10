import { Test, TestingModule } from '@nestjs/testing';
import { UsersPageController } from './users-page.controller';
import { UsersPageService } from './users-page.service';

describe('UsersPageController', () => {
  let controller: UsersPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersPageController],
      providers: [UsersPageService],
    }).compile();

    controller = module.get<UsersPageController>(UsersPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
