import { IsNotEmpty } from 'class-validator';



export class CreateTaskDto {
    id: number;
    @IsNotEmpty()
    Description: string;
    @IsNotEmpty()
    Color: string;
    @IsNotEmpty()
    taskCategoryId: number;
    @IsNotEmpty()
    taskStatusId: number;
    @IsNotEmpty()
    userId: number;
    
}
