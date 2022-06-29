// create a message based handle

import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import {AuthDto} from './dto/createUser.dto';
import { AuthService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: AuthService,
    ) {}

    @MessagePattern({cmd: 'get-mee'})
    getGreetingMessage(name: string): string {
        return `Hello ${name}`;
    }

}