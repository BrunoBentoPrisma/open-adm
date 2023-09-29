import { MaxLength } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  @MaxLength(255)
  name: string;
}
