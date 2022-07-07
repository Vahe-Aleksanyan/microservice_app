import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";
import {AppService} from "./app.service";
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // to make it global as @Global() does to have access in other places
  }), UserModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
