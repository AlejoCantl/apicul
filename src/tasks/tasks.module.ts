import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { User } from 'src/user/entities/user.entity';
import { TaskStatusService } from 'src/task_status/task_status.service';
import { TaskCategoriesService } from 'src/task_categories/task_categories.service';
import { UserService } from 'src/user/user.service';
import { TaskStatusModule } from 'src/task_status/task_status.module';
import { TaskCategoriesModule } from 'src/task_categories/task_categories.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports : [TypeOrmModule.forFeature([Task, TaskStatus, TaskCategory, User]),TaskStatusModule,TaskCategoriesModule,UserModule],
  controllers: [TasksController],
  providers: [TasksService, TaskStatusService, TaskCategoriesService, UserService],
})
export class TasksModule {}
