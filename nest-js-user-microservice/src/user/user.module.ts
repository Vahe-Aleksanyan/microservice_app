import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {UserController} from "./user.controller";
import { AuthService } from "./user.service";

@Module({
  imports: [ConfigModule],
  controllers: [UserController],
  providers: [AuthService],

})
export class UserModule {}