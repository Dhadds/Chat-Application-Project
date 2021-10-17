// a chat room can have many users
// a user can also have many chat rooms

import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class ChatRoom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => User)
    @JoinTable({
        name: 'user_chat_room'
    }) 
    users: User[];
}