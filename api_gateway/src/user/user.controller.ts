//We also need a SubscribersController that communicates with our microservice.
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject, Req,
  UseInterceptors
} from "@nestjs/common";

import { Request } from "express";
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  // injecting clientProxy to use rabbitmq
  constructor(
    @Inject('USER_SERVICE') private userService: ClientProxy,
  ) {}

  @Get('me')
  getMe(@Req() req: Request) {
    return this.userService.send({cmd: 'me'}, { headers: req.headers, body: req.body });
  }
}
