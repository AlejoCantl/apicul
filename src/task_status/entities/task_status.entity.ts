import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class TaskStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    Description: string;
    @OneToMany(() => Task, task => task.taskStatus)
    task: Task[];
}
