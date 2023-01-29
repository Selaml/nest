import { getEntityManagerToken } from '@nestjs/typeorm';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class employee {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column()
  phone: number;

  @Column()
  password: string;

  @Column({ default: false })
  is_deleted: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
