// create a very straightforward service to add and list email subscribers.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import {AuthDto} from './dto/createUser.dto';
import { Repository } from 'typeorm';
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import * as jjwt from 'jsonwebtoken';
@Injectable()
export class UserService {
    constructor(
      private prisma: PrismaService, // include prisma to be able to use it
      private jwt: JwtService,
      private config: ConfigService
    ) {}

    async getMe(token) {
        const tok = token.split(" ")[1]
        const secret = this.config.get('JWT_SECRET');
        const decode = jjwt.verify(tok, "some-super-secret")
        const decodeValues = Object.values(decode)
        const user = await this.prisma.user.findUnique({
                where: {
                    email: decodeValues[1]
                },
            });

        return user
    }
}
