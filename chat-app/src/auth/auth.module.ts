import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { UserLoginDetails } from 'src/models/UserLoginDetails.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserLoginDetails])],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
