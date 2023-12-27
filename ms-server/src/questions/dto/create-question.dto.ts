import { IsArray, IsEnum, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { QuestionTypeEnum } from 'src/systems/utils';

export class CreateQuestionDto {
  @IsArray({ message: 'answers must be provided' })
  questionPossibleAnswers: ReadonlyArray<string>;

  @IsNotEmpty({ message: 'question name must not be empty' })
  @IsString({ message: 'question must be a string' })
  questionText: string;

  @IsNotEmpty({ message: 'questionType name must not be empty' })
  @IsString({ message: 'questionType must be a string' })
  @IsEnum(QuestionTypeEnum, { message: 'Invalid questionType' })
  @IsIn(Object.values(QuestionTypeEnum), { message: 'Invalid questionType' })
  questionType: QuestionTypeEnum;
}
