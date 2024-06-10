import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TimeTrackerPage {
   id: number;
   summary: string;
   project: string;
   date: string;
   timeStart: string;
   timeEnd: string;
}
// http://localhost:3000/Time-Tracker-Page