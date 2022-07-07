//We also need a SubscribersController that communicates with our microservice.
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Patch, Req,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";

import { Request } from "express";
import { ClientProxy } from '@nestjs/microservices';
import { GetUser } from "./decorator";
// import { repeatWhen } from "rxjs";


//@UseGuards(JwtGuard) // 'jwt' are given name by default
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  // injecting clientProxy to use rabbitmq
  constructor(
    @Inject('USER_SERVICE') private userService: ClientProxy,
  ) {}

  @Get('me')
  getMe(@Req() req: Request, @GetUser('id') userId: number) {
    return this.userService.send({cmd: 'me'}, { headers: req.headers, body: req.body, userId });
  }
}
