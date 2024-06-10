import { Module } from '@nestjs/common';
import { TimeTrackerPageService } from './time-tracker-page.service';
import { TimeTrackerPageController } from './time-tracker-page.controller';

@Module({
  controllers: [TimeTrackerPageController],
  providers: [TimeTrackerPageService],
})
export class TimeTrackerPageModule {}
