import { IsEmpty, IsOptional } from "class-validator";
import { User } from "src/auth/schema/user.schema";

export class UpdateFormDto{
    @IsOptional()
    readonly title: string
    @IsOptional()
    readonly formId: string;
    @IsOptional()
    readonly discription: string
    @IsOptional()
    readonly ownerName: string;
    @IsOptional()
    readonly responseGivers: string[];
    @IsOptional()
    readonly questionIdList: string[];
    @IsEmpty({message : "You can not pass User ID"})
    readonly user: User;
    @IsOptional()
    readonly readyToUse : boolean;
}