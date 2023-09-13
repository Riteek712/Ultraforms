import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResponseCol } from './schema/responseCol.schema';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class ResponseColService {
    constructor(
        @InjectModel(ResponseCol.name)
        private responseColModel = mongoose.Model<ResponseCol>
    ){}

    async getResponses(): Promise<ResponseCol[]>{
        
        return this.responseColModel.find()
    }
    
    async addResponse(responseCol: ResponseCol, user: User):
    Promise<ResponseCol>{
        const res = await this.responseColModel.create(responseCol)
        const data = Object.assign(responseCol, {user: user._id})
        return res;
    }

    async findById(id: string): Promise<ResponseCol>{
        return await this.responseColModel.findById(id)
    }
    // resObj: {qId: String,
        // response: String}
    async updateResponseById(id: string, responseCol: ResponseCol): Promise<ResponseCol>{
        return await this.responseColModel.findByIdAndUpdate(id, responseCol, {
            new:true,
            runValidators: true
        });
    }

    
    // async findById(id: string): Promise<ResponseCol>{
    //     return await this.responseColModel.findById(id)
    // }
}
