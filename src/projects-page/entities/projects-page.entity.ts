import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class ProjectsPage {
   id: number;
   name: string;
   totalHoursTracked: number;

}
