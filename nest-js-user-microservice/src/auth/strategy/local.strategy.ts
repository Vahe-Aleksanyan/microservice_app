
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private prisma: PrismaService) {
    super();
  }

  async validate ( sub: number ) { // here we are retrieving req.user data to find user from db and append to req in user.controller
    console.log("i am here");
    const user = await this.prisma.user.findUnique({ //
      where: {
        id: sub
      }
    });

    console.log(user);
    // dont forget to omit password
    delete user.password;
    return null;
    return user; // here user becomes part of request

  }
}
