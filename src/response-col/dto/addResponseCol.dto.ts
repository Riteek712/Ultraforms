import { IsNotEmpty, IsString, IsNumber, IsEnum, IsEmpty } from "class-validator"


export class addResponseDto{
    @IsNotEmpty()
    readonly response: {
        qId: String,
        response: String
    }
}