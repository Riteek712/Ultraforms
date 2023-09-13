import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schema/user.schema";
// import { Question } from "./question.schema";

@Schema({
    timestamps:true
})
export class Form{
    @Prop()
    title: string;
    @Prop()
    formId: string;
    @Prop()
    discription: string;
    @Prop()
    ownerName: string;
    @Prop()
    responseGivers: string[];
    @Prop()
    questionIdList: string[];
    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
    user : User
    @Prop()
    readyToUse : boolean;

}
/*
title: title 1
discription: form discription
owner name: userId / user name
responceGiversnot present
readyToUse : false
*/
export const FormSchema  = SchemaFactory.createForClass(Form)