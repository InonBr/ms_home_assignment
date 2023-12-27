import { Module } from '@nestjs/common';

import { DatabaseModule } from './providers/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
