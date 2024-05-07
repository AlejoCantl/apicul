import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>,@InjectRepository(TaskStatus) private TaskStatusRepository: Repository<TaskStatus>,
  @InjectRepository(TaskCategory) private TaskCategoryRepository: Repository<TaskCategory>,@InjectRepository(User) private UserRepository: Repository<User>) {}
  
  async create(createTaskDto: CreateTaskDto) {
    const taskCategory = await this.TaskCategoryRepository.findOneBy(createTaskDto.taskCategory);
    const taskStatus = await this.TaskStatusRepository.findOneBy(createTaskDto.taskStatus);
    const user = await this.UserRepository.findOneBy(createTaskDto.user);
    if (!taskCategory || !taskStatus || !user) {
      throw new BadRequestException("TaskCategory, TaskStatus or User not found");
    }
    return await this.tasksRepository.save({taskCategory, taskStatus, user,...createTaskDto});
  }

  async findAll() {
    return this.tasksRepository.find();
  }

  async findOne(id: number) {
    return this.tasksRepository.findOneBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return this.tasksRepository.delete(id);
  }
}
