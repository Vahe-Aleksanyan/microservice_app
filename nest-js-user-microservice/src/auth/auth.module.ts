import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
  imports: [JwtModule.register({}), PassportModule, UserModule], // these are available only this module, import also as a dependency injection in service constructor
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy]
})
export class AuthModule {}
