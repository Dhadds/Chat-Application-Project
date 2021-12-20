import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class UserLoginDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;
}