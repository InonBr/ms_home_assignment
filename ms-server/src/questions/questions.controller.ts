import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('api/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('/createQuestion')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async createNewQuestion(
    @Body()
    { questionPossibleAnswers, questionText, questionType }: CreateQuestionDto,
  ) {
    const questionData = await this.questionsService.createNewQuestion({
      questionText,
      questionType,
    });

    await this.questionsService.insertAnswers({
      question: questionData,
      questionPossibleAnswers,
    });

    return { questionData };
  }
}
