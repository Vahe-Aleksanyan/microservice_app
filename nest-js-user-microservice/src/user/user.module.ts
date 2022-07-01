import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {UserController} from "./user.controller";
import { UserService } from "./user.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../auth/strategy";
import { AuthService } from "../auth/auth.service";

@Module({
  imports: [ConfigModule, JwtModule.register({})],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, AuthService],

})
export class UserModule {}
