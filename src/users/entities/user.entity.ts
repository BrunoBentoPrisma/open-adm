import { MaxLength } from 'class-validator';
import { BaseEntity } from 'src/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({
    type: 'text',
    nullable: true,
  })
  @MaxLength(255)
  name: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  @MaxLength(255)
  password: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  @MaxLength(20)
  phone?: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  @MaxLength(255)
  email: string;
}
