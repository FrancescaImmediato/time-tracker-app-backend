import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersPageDto } from './create-users-page.dto';

export class UpdateUsersPageDto extends PartialType(CreateUsersPageDto) {}
