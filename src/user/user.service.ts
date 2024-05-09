import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.UserRepository.save(createUserDto);
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return this.UserRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }
}
