import { IsNotEmpty } from 'class-validator';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateTaskDto {
    @IsNotEmpty()
    Description: string;
    @IsNotEmpty()
    Color: string;
    @IsNotEmpty()
    taskCategory: TaskCategory;
    @IsNotEmpty()
    taskStatus: TaskStatus;
    @IsNotEmpty()
    user: User;
    
}
