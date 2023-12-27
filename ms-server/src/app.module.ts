import { Module } from '@nestjs/common';

import { DatabaseModule } from './providers/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, QuestionsModule, VotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
