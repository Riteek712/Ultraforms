import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty } from "class-validator";
import { User } from "src/auth/schema/user.schema";

export class CreateFormDto{
    @ApiProperty({
        description: 'Title of the Form.',
        example : 'Genral information'
    })
    readonly title: string
    readonly formId: string;
    @ApiProperty({
        description: 'description of what the form is about.',
        example : 'Genral information is a form for collecting genral information about different users.'
    })
    readonly discription: string;
    @ApiProperty({
        description: 'Name of the Owner',
        example : 'Riteek Rakesh'
    })
    readonly ownerName: string;
    readonly responseGivers: string[];
    @ApiProperty({
        description: 'List of the questionIds of the questions related to the form.',
        // example : 'Riteek Rakesh'
    })
    readonly questionIdList: string[];
    @IsEmpty({message : "You can not pass User ID"})
    readonly user: User;
    readonly readyToUse : boolean;
}