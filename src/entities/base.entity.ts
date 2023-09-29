import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'timestamp',
    default: new Date(),
    nullable: false,
  })
  dt_creation: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  last_update?: Date;

  @Column({
    type: 'boolean',
    default: true,
    nullable: false,
  })
  active: boolean;
}
