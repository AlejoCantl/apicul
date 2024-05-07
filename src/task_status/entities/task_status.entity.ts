import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TaskStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    Description: string;
}
