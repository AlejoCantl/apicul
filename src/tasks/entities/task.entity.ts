import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TaskCategory } from 'src/task_categories/entities/task_category.entity';
import { User } from 'src/user/entities/user.entity';
import { TaskStatus } from 'src/task_status/entities/task_status.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskCategoryId: number;
    @ManyToOne(() => TaskCategory)
    @JoinColumn({ name: 'taskCategoryId' })
    taskCategory: TaskCategory;

    @Column()
    taskStatusId: number;
    @ManyToOne(() => TaskStatus)
    @JoinColumn({ name: 'taskStatusId' })
    taskStatus: TaskStatus;

    @Column()
    userId: number;
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column()
    Description: string;
    @Column()
    Color: string;
}