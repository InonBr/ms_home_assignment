import { Injectable } from '@nestjs/common';
import { Answer } from 'src/entities/Answers.entities';

@Injectable()
export class VotesService {
  async findAnswer(id: string) {
    return await Answer.findOne({
      where: { id },
    });
  }

  async incrementVote(answer: Answer) {
    answer.voted = Number(answer.voted) + 1;
    return await Answer.save(answer);
  }
}
