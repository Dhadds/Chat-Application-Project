import { Body, Controller, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './DTOs/LoginDTO';

@Controller('auth')
export class AuthController {

    @Inject()
    authService: AuthService;

    @Post('login')
    async login (@Body() loginDTO:  LoginDTO) {
        try {
            await this.authService.login(loginDTO);
        } catch (error) {
            throw new HttpException("Error logging in", HttpStatus.BAD_REQUEST);
        }
    }
}
