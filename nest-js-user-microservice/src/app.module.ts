import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";
import {AppService} from "./app.service";

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
