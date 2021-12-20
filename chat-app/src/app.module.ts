import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySqlConfig } from 'config/MysqlConfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...MySqlConfig,
      synchronize: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
    UserModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
