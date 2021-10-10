import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { UserLoginDetails } from 'src/models/UserLoginDetails.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserLoginDetails])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
