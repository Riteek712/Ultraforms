import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createQuestionDto } from './dto/question.dto';
import { Question } from './schema/question.schema';
import { QuestionService } from './question.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Questions')
@Controller('questions')
export class QuestionController {
    constructor(
        private questionService: QuestionService
    ){}
    @Post()
    async createQuestion(
        @Body()
        question: createQuestionDto
    ): Promise<Question>{
        return this.questionService.addQuestion(question)
    }
    @Get()
    async getQuestions():Promise<Question[]>{
        return this.questionService.getAllQuestions();
    }
    @Delete(':id')
    async deleteQues(
        @Param('id')
        id: string
    ): Promise<Question>{
        return await this.questionService.deleteQuestion(id);
    }
}

