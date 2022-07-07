// create a message based handle
import { Controller, Req, UseGuards, ExecutionContext} from "@nestjs/common";
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { UserService } from './user.service';
import { JwtGuard } from './guard';
import { GetUser } from "./decorator";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @MessagePattern({ cmd: 'me' })
  async getMe(data: any,  @GetUser('id') userId: number) {
    return await this.userService.getMe(data);
  }
}

// Guard functions that stands in front of endpoint and allow/dont allow execution, it checks strategy
