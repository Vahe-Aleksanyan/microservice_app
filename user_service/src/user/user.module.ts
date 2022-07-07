import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {UserController} from "./user.controller";
import { UserService } from "./user.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../auth/strategy";
import { AuthService } from "../auth/auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "../auth/strategy/local.strategy";

@Module({
  imports: [ConfigModule, PassportModule, JwtModule.register({})],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, LocalStrategy, AuthService],

})
export class UserModule {}
