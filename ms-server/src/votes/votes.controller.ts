import { Controller, HttpCode, Param, Put, Res } from '@nestjs/common';
import { VotesService } from './votes.service';
import { Response } from 'express';

@Controller('api/votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Put('/:answerId')
  @HttpCode(201)
  async getQuestionWithAnswers(
    @Param('answerId') answerId: string,
    @Res() res: Response,
  ) {
    try {
      const answer = await this.votesService.findAnswer(answerId);

      if (!answer) {
        return res.status(404).send({ msg: 'not found' });
      }

      await this.votesService.incrementVote(answer);
      return res.status(201).send({ answer });
    } catch (error) {
      console.log(error);

      res.status(500).send({ msg: 'internal server error' });
    }
  }
}
