import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerPageService } from './time-tracker-page.service';

describe('TimeTrackerPageService', () => {
  let service: TimeTrackerPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeTrackerPageService],
    }).compile();

    service = module.get<TimeTrackerPageService>(TimeTrackerPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
