import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { UserLoginDetails } from 'src/models/UserLoginDetails.entity';
import { Repository } from 'typeorm';
import { LoginDTO } from './DTOs/LoginDTO';

@Injectable()
export class AuthService {

    @InjectRepository(User)
    userRepo: Repository<User>;
    @InjectRepository(UserLoginDetails)
    userLoginDetailsRepo: Repository<UserLoginDetails>;

    async login (loginDTO: LoginDTO) {
        const user = await this.userRepo.findOne({
            email: loginDTO.email,
        });
        console.log(user.userLoginDetails);
    }
}
