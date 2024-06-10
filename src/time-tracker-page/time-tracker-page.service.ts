import { Injectable } from '@nestjs/common';
import { CreateTimeTrackerPageDto } from './dto/create-time-tracker-page.dto';
import { UpdateTimeTrackerPageDto } from './dto/update-time-tracker-page.dto';

@Injectable()
export class TimeTrackerPageService {
  create(createTimeTrackerPageDto: CreateTimeTrackerPageDto) {
    return 'This action adds a new timeTrackerPage';
  }

  findAll() {
    return `This action returns all timeTrackerPage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeTrackerPage`;
  }

  update(id: number, updateTimeTrackerPageDto: UpdateTimeTrackerPageDto) {
    return `This action updates a #${id} timeTrackerPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeTrackerPage`;
  }
}
