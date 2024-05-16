import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
} from 'typeorm';

@Entity('user_data')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @Column({ nullable: false, length: 255, type: 'varchar', name: 'first_name' })
  firstName: string;

  @Column({ nullable: false, length: 255, type: 'varchar', name: 'last_name' })
  lastName: string;

  @Column({ nullable: false, length: 255, type: 'varchar', name: 'email' })
  email: string;

  @Column({
    nullable: false,
    length: 255,
    type: 'varchar',
    name: 'hashed_password',
  })
  hashedPassword: string;
}
