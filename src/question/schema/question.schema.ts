import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Form } from "src/form/schema/form.schema";
// export type mcq(n : number){
//     Question[n]
//     // age: number;
//   };
// function mcqG ( n : number){
//     return Question[n];
// }
// export enum Category{
//     none = 0,
//     mcq = mcqG,
//     CRIME = 'Crime',
//     FANTASY = 'Fantasy'
// }
@Schema({
    timestamps: true
})
export class Question{
    // constructor( formid : string){
        
    //     formid = formid
    // }
    @Prop( {type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Form' }]})
    formid : string
    @Prop()
    questionTag : number;
    @Prop()
    questionText : string;
    @Prop()
    incentive : number;
    @Prop()
    decision: number;
    

}
export const QuestionSchema  = SchemaFactory.createForClass(Question)