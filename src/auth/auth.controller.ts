import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LogInDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('User controls')
@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('/signup')
    signUp(
        @Body() signUpDto:SignUpDto
    ): Promise <{token:string}>{
        return this.authService.signUp(signUpDto)
    }
    @Get('/login')
    login( @Body() logindto : LogInDto): Promise<{token:string}>{
        return this.authService.login(logindto);
    }
}
