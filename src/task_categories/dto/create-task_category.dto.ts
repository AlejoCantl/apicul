import { IsNotEmpty } from 'class-validator';
import { OneToMany } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';
export class CreateTaskCategoryDto {
    @IsNotEmpty()
    Description: string;
    @IsNotEmpty()
    Color: string;
}
