import { QuestionTypeEnum } from 'src/systems/utils';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('question')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column({ nullable: false })
  question!: string;

  @Column({ type: 'enum', enum: QuestionTypeEnum })
  question_type!: string;

  @CreateDateColumn()
  created_at!: Date;
}
