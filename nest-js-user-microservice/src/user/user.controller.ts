// create a message based handle

import { Controller, Req, UseGuards } from "@nestjs/common";
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import {AuthDto} from './dto/createUser.dto';
import { UserService } from './user.service';
import { AuthGuard } from "@nestjs/passport";
import { JwtStrategy } from "../auth/strategy";
import { Request } from "express";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    //@UseGuards(AuthGuard('local'))
    @MessagePattern({cmd: 'me'})
    async getMe( req: string) {
        return  await this.userService.getMe(req);
    }


}

// Guard functions that stands in front of endpoint and allow/dont allow execution, it checks strategy

