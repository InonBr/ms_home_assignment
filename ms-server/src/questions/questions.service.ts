import { Injectable } from '@nestjs/common';
import { Question } from 'src/entities/Questions.entities';
import {
  CreateNewQuestionInterface,
  InsertAnswersInterface,
} from './questions.interface';
import { Answer } from 'src/entities/Answers.entities';

@Injectable()
export class QuestionsService {
  constructor() {}

  async createNewQuestion({
    questionText,
    questionType,
  }: CreateNewQuestionInterface) {
    const newQuestionData = Question.create({
      question: questionText,
      question_type: questionType,
    });

    await newQuestionData.save();
    return newQuestionData;
  }

  async insertAnswers({
    question,
    questionPossibleAnswers,
  }: InsertAnswersInterface) {
    const answers = questionPossibleAnswers.map(
      ({ isCorrect, questionText }) => {
        return Answer.create({
          text: questionText,
          is_correct: isCorrect,
          question,
        });
      },
    );

    await Answer.save(answers);
  }

  async getAnswersByQuestion(id: string) {
    return await Answer.find({
      where: { question: { id } },
    });
  }

  async getQuestion(id: string) {
    return await Question.findOne({
      where: { id },
    });
  }
}
