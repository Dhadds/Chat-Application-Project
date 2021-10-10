import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PubUser, User } from 'src/models/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    @InjectRepository(User)
    userRepository: Repository<User>;
    async createUser(newUser: PubUser) {
        newUser.isActive = false;
        this.userRepository.save(newUser);
    }
}
