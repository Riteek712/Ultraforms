import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps:true
})
export class ResponseCol{
    @Prop()
    formId: String;
    @Prop()
    responses: {
        qId: String,
        response: String
    }[];
    @Prop()
    ownerId:String;
    @Prop()
    readyToUse : boolean;
}

export const ResponseColSchema = SchemaFactory.createForClass(ResponseCol);