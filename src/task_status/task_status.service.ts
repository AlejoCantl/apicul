import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task_status.dto';
import { UpdateTaskStatusDto } from './dto/update-task_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {
  constructor(@InjectRepository(TaskStatus) private TaskStatusRepository: Repository<TaskStatus>) {}
  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.TaskStatusRepository.save(createTaskStatusDto);
  }

  findAll() {
    return this.TaskStatusRepository.find();
  }

  findOne(id: number) {
    return this.TaskStatusRepository.findOneBy({id});
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.TaskStatusRepository.update(id, updateTaskStatusDto);
  }

  remove(id: number) {
    return this.TaskStatusRepository.delete(id);
  }
}
