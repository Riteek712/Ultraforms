import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Form } from './schema/form.schema';
import * as mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class FormService {
    constructor(
        @InjectModel(Form.name)
        private formModel = mongoose.Model<Form>
    ){
        
    }

    async findAll(): Promise<Form[]> {
        const forms = await this.formModel.find()
        return forms;
    }
    async create(form : Form, user: User): Promise<Form>{
        const data = Object.assign(form, {user: user._id})
        const res = await this.formModel.create(form)
        return res
    }
    async findById(id: string): Promise<Form>{
        return await this.formModel.findById(id)
    }
    async updateById(id: string, form: Form):Promise<Form>{
        return await this.formModel.findByIdAndUpdate(id, form,{
            new: true,
            runValidators: true
        })
    }
    async deleteById(id: string):Promise<Form>{
        return await this.formModel.findByIdAndDelete(id)
    } 
    async addQuestionId(id: string, qId : string): Promise<Form>{
        const form =  await this.formModel.findById(id);
        form.questionIdList.add(qId)
        return form
    }
}
