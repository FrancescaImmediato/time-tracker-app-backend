import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class UsersPage {
      @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      name: string;
    
      @Column()
      email: string;
}

// GET /users-page - Retrieve all users
// GET /users-page/:id - Retrieve a specific user by ID
// POST /users-page - Create a new user
// PUT /users-page/:id - Update an existing user by ID
// DELETE /users-page/:id - Delete a user by ID