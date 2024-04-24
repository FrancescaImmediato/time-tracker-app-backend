
 import {Entity, Column, PrimaryGeneratedColumn, Timestamp} from 'typeorm';

 @Entity()
 export class User{
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   createdAt: string;

   @Column()
   firstName: string;

   @Column()
   lastName: string;

   @Column()
   email: string;

   @Column()
   hashedPassword: string;
 }