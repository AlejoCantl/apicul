import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
