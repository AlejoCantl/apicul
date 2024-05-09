import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Task, TaskStatus, TaskCategory, User])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
