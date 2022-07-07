// // logic to verify the Bearer token - strategy. dont forget to import as provider in authModule
// // we can have strategies ex. login with facebook, google etc.
// import { PassportStrategy } from "@nestjs/passport"; // this already has a guard to work with strategy
// import { Strategy, ExtractJwt } from 'passport-jwt'
// import { Injectable } from "@nestjs/common";
// import { ConfigService } from "@nestjs/config";
// import { PrismaService } from "../../prisma/prisma.service";
//
// @Injectable()
// export class JwtStrategy  extends PassportStrategy(
//   Strategy,
//   "jwt", // provide name
//   ) { // since we are extending we need to call its constructor
//   constructor(config: ConfigService, private prisma: PrismaService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: config.get('JWT_SECRET'),
//     });
//   }
//   async validate (payload: { sub: number, email: string }) { // here we are retrieving req.user data to find user from db and append to req in user.controller
//     const user = await this.prisma.user.findUnique({ //
//       where: {
//         id: payload.sub
//       }
//     });
//     // dont forget to omit password
//     delete user.password;
//     return null;
//     return user; // here user becomes part of request
//   }
// }


// for authentication
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaService) { // private means that we create variable inside this class
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // if it does not  reverie jwt token just throws an error
      secretOrKey: config.get('JWT_SECRET'),
    });
  }
  async validate(payload: { sub: number; email: string }) {
    // the token will be translated and be put inside payload
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });

    delete user.password; // don`t forget to delete password for security
    return user; // appends  payload object as user object of the request
  }
}
