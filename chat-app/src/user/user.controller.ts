import { Body, Controller, HttpException, HttpStatus, Inject, Post, Response } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { PubUser, User } from 'src/models/User.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    @Inject()
    userService: UserService;

    @Post()
    async createUser(@Body() user: PubUser) {
        try {
            await this.userService.createUser(user);
        } catch {
            throw new HttpException('Error Creating User', HttpStatus.BAD_REQUEST);
        }
    }
}
