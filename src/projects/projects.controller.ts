import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Project> {
    return this.projectsService.findOne(id);
  }

  @Post()
  create(@Body() project: Project): Promise<Project> {
    return this.projectsService.create(project);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() project: Project): Promise<Project> {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.projectsService.remove(id);
  }
}
