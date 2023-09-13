import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './schema/form.schema';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { createQuestionDto } from 'src/question/dto/question.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('Forms')
@Controller('forms')
export class FormController {
    constructor(
        private formService : FormService
    ){}

    @Get()
    async getAllForms(): Promise<Form[]>{
        return this.formService.findAll();
        
    }
    @Get('/formIds')
    async getAllFormsIds(): Promise<string[]>{
        const forms = await this.formService.findAll();
        const formIds = forms.map(function(form){
            return form.formId; 

        })
        return formIds
        
    }
    @Get(':id')
    async getForm(
        @Param('id')
        id: string
    ): Promise<Form>{
        const form = this.formService.findById(id);
        if(!form){
            throw new NotFoundException('Form not found')
        } 
        return form
        
    }
    @Post()
    @UseGuards(AuthGuard())
    async createForm(
        @Body()
        form : CreateFormDto
        ,@Req() req,
    ): Promise<Form>{
        console.log(req.user)
        return this.formService.create(form, req.user);
    }
    @Put(':id')
    async updateForm(
        @Param('id')
        id: string,
        @Body()
        form: UpdateFormDto):Promise<Form>{
        return await this.formService.updateById(id, form)
    }
    @Put('addQ/:id')
    async addQuestionToForm(
        @Param('id')
        id: string,
        @Body()
        obj: {
            qid: string
        }
    ): Promise<Form>{
        // const form = await this.formService.addQuestionId(id, qid)
        const form  = await this.formService.findById(id)
        var list = form.questionIdList
        if (!list){
            list = [obj.qid]
        }else{
            list = [...list ,obj.qid]
        }
        // form.questionIdList = list;
        return this.updateForm(id, {
            questionIdList: list,
            title: form.title,
            formId: form.formId,
            discription: form.discription,
            ownerName: form.ownerName,
            responseGivers: [],
            user: form.user,
            readyToUse: false
        })
        // findById(id)
        // form.
        // return form;
        // return this.formService.create(form)

    }

    
    @Delete(':id')
    async deleteForm(
        @Param('id')
        id:string,
    ): Promise<Form>{
        return this.formService.deleteById(id)
    }
}
