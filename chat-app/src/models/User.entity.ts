import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ChatRoom } from "./ChatRoom.entity";
import { UserLoginDetails } from "./UserLoginDetails.entity";

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

    @OneToOne(() => UserLoginDetails, loginDetails => loginDetails)
    @JoinColumn()
    userLoginDetails: UserLoginDetails;

    @ManyToMany(() => ChatRoom)
    @JoinTable({
        name: 'user_chat_room',
    })
    chatRooms: ChatRoom[];
}

export class PubUser implements Omit<User, 'id' | 'chatRooms' | 'userLoginDetails'> {
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