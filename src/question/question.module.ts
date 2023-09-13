import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './schema/question.schema';
import { FormSchema } from 'src/form/schema/form.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Question', schema: QuestionSchema}]),MongooseModule.forFeature([{name:'Form', schema: FormSchema}])],
  providers: [QuestionService],
  controllers: [QuestionController]
})
export class QuestionModule {}
