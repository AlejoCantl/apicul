import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { User } from 'src/user/entities/user.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Description: string;

    @Column()
    Color: string;

    @ManyToOne(() => TaskCategory, taskCategory => taskCategory.id, {eager: true})
    taskCategory: TaskCategory;

    @ManyToOne(() => TaskStatus, taskStatus => taskStatus.id, {eager: true})
    taskStatus: TaskStatus;

    @ManyToOne(() => User, user => user.id, {eager: true})
    user: User;
}