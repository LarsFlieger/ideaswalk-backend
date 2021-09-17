import { IsString } from "class-validator";

export class CreateIdeaDto {
    @IsString()
    title: string

    @IsString()
    problem: string

    @IsString()
    solution: string
}
