import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy";

@Module({
  imports: [JwtModule.register({})], // these are available only this module, import also as a dependency injection in service constructor
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
