// here we consume, handle, use microservice

import { Body, Controller } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { MessagePattern } from "@nestjs/microservices";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @MessagePattern({cmd: 'signup'})
  async signup(@Body() dto : AuthDto) {
      return this.AuthService.signup(dto);
  }

  @MessagePattern({cmd: 'signIn'})
  async signIn(@Body() dto: AuthDto) {
    return this.AuthService.signIn(dto);
  }
}
