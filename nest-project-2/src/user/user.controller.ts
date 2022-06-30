//We also need a SubscribersController that communicates with our microservice.
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Patch,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

import { ClientProxy } from '@nestjs/microservices';

//@UseGuards(JwtGuard) // 'jwt' are given name by default
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  // import user service threw dependency injection
  // constructor(private userService: UserService) {}
  constructor(
    @Inject('USER_SERVICE') private userService: ClientProxy,
  ) {}

  @Get('me')
  getMe(
    @GetUser() user: User, // User comes from prisma client. guard finds the user and pass to GetUse r decorator which returns the data, in this case user object
    //@GetUser('email') email: string, // @getUser decorator is useful for this purpose
    //@GetUser('id') id: string,
  ) {
    return user;
  }


  @Get()
  async getUsers() {
   // console.log('in the client');
    // we are sending/emit message and based on this message actual code will work in microservice
    return this.userService.send({cmd: 'greeting'}, 'Progressive Coder');
  }

  // // edit user will receive body with type of EditUserDto, also userId with the type of number
  // @Patch()
  // // @ApiResponse()
  // editUser(@Body() dto: EditUserDto, @GetUser('id') userId: number) {
  //   return this.userService.editUser(userId, dto);
  // }
}
