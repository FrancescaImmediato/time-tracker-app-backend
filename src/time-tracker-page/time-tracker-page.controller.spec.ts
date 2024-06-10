import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerPageController } from './time-tracker-page.controller';
import { TimeTrackerPageService } from './time-tracker-page.service';

describe('TimeTrackerPageController', () => {
  let controller: TimeTrackerPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeTrackerPageController],
      providers: [TimeTrackerPageService],
    }).compile();

    controller = module.get<TimeTrackerPageController>(TimeTrackerPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
