import { Body, ClassSerializerInterceptor, Controller, HttpCode, Inject, Post, UseInterceptors } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ClientProxy } from "@nestjs/microservices";


@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    @Inject('USER_SERVICE') private userService: ClientProxy,
  ) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.userService.send({cmd: 'signup'}, dto);
  }

  @HttpCode(200)
  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.userService.send({cmd: "signIn"}, dto);
  }
}
