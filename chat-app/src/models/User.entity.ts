import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ChatRoom } from "./ChatRoom.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true })
    email: string;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToMany(() => ChatRoom)
    @JoinTable({
        name: 'user_chat_room'
    })
    chatRooms: ChatRoom[];
}

export class PubUser implements Omit<User, 'id' | 'chatRooms'> {
    @ApiProperty()
    email: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    password: string;

    isActive: boolean;
}