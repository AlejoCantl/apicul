import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';
import { TaskCategory } from './entities/task_category.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskCategoriesService {
  constructor(@InjectRepository(TaskCategory) private TaskCategoryRepository: Repository<TaskCategory>) {}

  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.TaskCategoryRepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.TaskCategoryRepository.find();
  }

  findOne(id: number) {
    return this.TaskCategoryRepository.findOneBy({id});
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.TaskCategoryRepository.update(id, updateTaskCategoryDto);
  }

  remove(id: number) {
    return this.TaskCategoryRepository.delete(id);
  }
}
