import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeTrackerPageService } from './time-tracker-page.service';
import { CreateTimeTrackerPageDto } from './dto/create-time-tracker-page.dto';
import { UpdateTimeTrackerPageDto } from './dto/update-time-tracker-page.dto';

@Controller('time-tracker-page')
export class TimeTrackerPageController {
  constructor(private readonly timeTrackerPageService: TimeTrackerPageService) {}

  @Post()
  create(@Body() createTimeTrackerPageDto: CreateTimeTrackerPageDto) {
    return this.timeTrackerPageService.create(createTimeTrackerPageDto);
  }

  @Get()
  findAll() {
    return this.timeTrackerPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeTrackerPageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeTrackerPageDto: UpdateTimeTrackerPageDto) {
    return this.timeTrackerPageService.update(+id, updateTimeTrackerPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeTrackerPageService.remove(+id);
  }
}
