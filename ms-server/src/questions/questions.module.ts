import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Question } from 'src/entities/Questions.entities';
import { Answer } from 'src/entities/Answers.entities';
import { Repository } from 'typeorm';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService, Question, Answer, Repository],
  imports: [],
})
export class QuestionsModule {}
