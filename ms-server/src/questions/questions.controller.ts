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
  constructor(private readonly _questionsService: QuestionsService) {}

  @Post('/createQuestion')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  create(
    @Body()
    { questionPossibleAnswers, questionText, questionType }: CreateQuestionDto,
  ) {
    return { questionPossibleAnswers, questionText, questionType };
  }
}

// @UseGuards(AuthGuard('jwt'))
// @Post('/sendQuizEmails')
// @HttpCode(201)
// @UsePipes(new ValidationPipe())
