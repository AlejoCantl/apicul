import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    FirstName: string;
    
    @Column()
    LastName: string;

    @Column()
    Address: string;

    @Column()
    PhoneNumber: string;

    @Column({
        unique: true
    })
    Email: string;

    @Column({default: true})
    isActive: boolean;

    @OneToMany(() => Task, task => task.user)
    task: Task[];
}
