import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './schema/question.schema';
import mongoose from 'mongoose';
import { Form } from 'src/form/schema/form.schema';

@Injectable()
export class QuestionService {
    
    constructor(
        @InjectModel(Question.name)
        private questionModel = mongoose.Model<Question>,
        @InjectModel(Form.name)
        private formModel = mongoose.Model<Form>
        
    ){}
    async addQuestion(question: Question) :     Promise<Question>{
        const res = await this.questionModel.create(question)
        // const qid = res._id.toString()
        // const form = await this.formModel.findById(res.formId);
        // form.questionIdList.push(qid);
        // await this.formModel.findByIdAndUpdate(res.formId, form, {
        //     new:true,
        //     runValidators: true
        // })



        return res
    }

    async getAllQuestions(): Promise<Question[]>{
        return this .questionModel.find()
    }
    async deleteQuestion(id: string): Promise<Question>{
        return await this.questionModel.findByIdAndDelete(id);
    }
}

