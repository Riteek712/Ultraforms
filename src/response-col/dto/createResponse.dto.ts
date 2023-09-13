import { IsNotEmpty, IsString, IsNumber, IsEnum, IsEmpty } from "class-validator"

export class createResponseDto{
    @IsNotEmpty()
    readonly formId: String;
    readonly responses: {
        qId: String,
        response: String
    }[];
    @IsNotEmpty()
    readonly ownerId: String;
    readonly readyToUse: boolean;
}
