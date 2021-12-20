import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PubUser, User } from 'src/models/User.entity';
import { UserLoginDetails } from 'src/models/UserLoginDetails.entity';
import { Repository, Transaction } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    @InjectRepository(User)
    userRepository: Repository<User>;
    @InjectRepository(UserLoginDetails)
    userLoginDetailsRepository: Repository<UserLoginDetails>

    async createUser(newUser: PubUser) {
        console.log('testing');
        newUser.isActive = false;
        const newU = new User();
        newU.email = newUser.email;
        newU.firstName = newUser.firstName;
        newU.lastName = newUser.lastName;
        const loginDetails = new UserLoginDetails();
        const hashed = await bcrypt.hash(newUser.password, 10);
        loginDetails.password = hashed; 
        const ld = await this.userLoginDetailsRepository.save(loginDetails);
        newU.userLoginDetails = ld;
        const user = await this.userRepository.save(newUser);
        
    }
}
