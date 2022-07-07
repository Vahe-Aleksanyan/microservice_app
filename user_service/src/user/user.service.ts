// create a very straightforward service to add and list email subscribers.
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import User from './user.entity';
// import {AuthDto} from './dto/createUser.dto';
// import { Repository } from 'typeorm';
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class UserService {
    constructor(
      private prisma: PrismaService, // include prisma to be able to use it
      private jwt: JwtService,
      private config: ConfigService
    ) {}

    async getMe(data) {
        console.log(data);
        return true
    }
}
