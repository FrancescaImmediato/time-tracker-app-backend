import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeEntry } from './time-entry.entity';

@Injectable()
export class TimeEntriesService {
  constructor(
    @InjectRepository(TimeEntry)
    private timeEntriesRepository: Repository<TimeEntry>,
  ) {}

  async findAll(): Promise<TimeEntry[]> {
    return this.timeEntriesRepository.find();
  }

  async findOne(id: number): Promise<TimeEntry> {
    return this.timeEntriesRepository.findOne(id);
  }

  async create(timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.timeEntriesRepository.save(timeEntry);
  }

  async update(id: number, timeEntry: TimeEntry): Promise<TimeEntry> {
    await this.timeEntriesRepository.update(id, timeEntry);
    return this.timeEntriesRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.timeEntriesRepository.delete(id);
  }
}
