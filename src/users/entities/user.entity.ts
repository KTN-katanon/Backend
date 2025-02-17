import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  // roles: ('admin' | 'user')[];
  @Column()
  gender: 'male' | 'female';

  @Column()
  age: number;
}
