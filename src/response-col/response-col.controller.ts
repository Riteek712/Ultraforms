import { Body,  Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { ResponseColService } from './response-col.service';
import { ResponseCol } from './schema/responseCol.schema';
import { addResponseDto} from './dto/addResponseCol.dto';
import { createResponseDto } from './dto/createResponse.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('Responce Collection')
@Controller('response-col')
export class ResponseColController {
    constructor(
        private responseColService: ResponseColService
    ){}
    @Get()
    async getAllResponses(): Promise<ResponseCol[]>{
        return this.responseColService.getResponses()
    }
    @Post()
    @UseGuards(AuthGuard())
    async createResponse(
        @Body()
        responseCol :createResponseDto,
        @Req() req
    ): Promise<ResponseCol>{
        return this.responseColService.addResponse(responseCol, req.user)
    }

    @Put(':id')
    async updateResponse(
        @Param('id')
        id: string,
        @Body()
        responseCol
    ): Promise<ResponseCol>{
        return await this.responseColService.updateResponseById(id, responseCol)
    }

    @Put('addR/:id')
    async addQuestionRes(
        @Param('id')
        id:string,
        @Body()
        obj: addResponseDto
    ):Promise<ResponseCol>{
        const res = await this.responseColService.findById(id)
        var list = res.responses
        if(!list){
            list = [obj.response]

        }else{
            list = [...list, obj.response]
        }
        return this.updateResponse(id, {
            formId : res.formId,
            responses: list,
            ownerId: res.ownerId,
            readyToUse: res.readyToUse
        })
         

    }
}
