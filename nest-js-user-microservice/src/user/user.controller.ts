// create a message based handle

import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import {AuthDto} from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @MessagePattern({cmd: 'get-me'})
    getGreetingMessage(name: string): string {
        return `Hello ${name}`;
    }

}

// Guard functions that stands in front of endpoint and allow/dont allow execution, it checks strategy

