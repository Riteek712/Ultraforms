import { IsNotEmpty, IsString, IsNumber, IsEnum, IsEmpty } from "class-validator"

export class createQuestionDto{
    @IsNotEmpty()
    readonly formid: string;
    readonly questionTag : number;
    @IsNotEmpty()
    readonly questionText : string;
    readonly incentive : number;
    readonly decision: number;
}
