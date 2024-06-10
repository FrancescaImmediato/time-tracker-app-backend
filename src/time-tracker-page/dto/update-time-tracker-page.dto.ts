import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeTrackerPageDto } from './create-time-tracker-page.dto';

export class UpdateTimeTrackerPageDto extends PartialType(CreateTimeTrackerPageDto) {}
