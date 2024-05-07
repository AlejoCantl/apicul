import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    Description: string;
    @Column()
    Color: string;
}
