import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Question } from './Questions.entities';

@Entity('answer')
export class Answer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column({ type: 'boolean' })
  is_correct!: boolean;

  @Column({ nullable: false, type: 'string' })
  text!: string;

  @Column({ type: 'number', default: 0 })
  voted: number;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => Question, (question) => question.answer)
  @JoinColumn({
    name: 'question_id',
  })
  question: Question;
}
