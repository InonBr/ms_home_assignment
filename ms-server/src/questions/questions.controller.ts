import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Response } from 'express';

@Controller('api/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('/:questionId')
  @HttpCode(200)
  async getQuestionWithAnswers(
    @Param('questionId') questionId: string,
    @Res() res: Response,
  ) {
    try {
      const [question, answers] = await Promise.all([
        this.questionsService.getQuestion(questionId),
        this.questionsService.getAnswersByQuestion(questionId),
      ]);

      if (!question) {
        res.status(404).send({ msg: 'not found' });
      }

      return { question, answers };
    } catch (error) {
      console.log(error);

      res.status(500).send({ msg: 'internal server error' });
    }
  }

  @Post('/createQuestion')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async createNewQuestion(
    @Body()
    { questionPossibleAnswers, questionText, questionType }: CreateQuestionDto,
    @Res() res: Response,
  ) {
    try {
      const questionData = await this.questionsService.createNewQuestion({
        questionText,
        questionType,
      });

      await this.questionsService.insertAnswers({
        question: questionData,
        questionPossibleAnswers,
      });

      return { questionData };
    } catch (error) {
      console.log(error);

      res.status(500).send({ msg: 'internal server error' });
    }
  }
}
