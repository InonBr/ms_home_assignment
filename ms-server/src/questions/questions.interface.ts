import { Question } from 'src/entities/Questions.entities';
import { QuestionTypeEnum } from 'src/systems/utils';

export interface CreateNewQuestionInterface {
  questionText: string;
  questionType: QuestionTypeEnum;
}

export interface InsertAnswersInterface {
  questionPossibleAnswers: ReadonlyArray<{
    isCorrect: boolean;
    questionText: string;
  }>;
  question: Question;
}
