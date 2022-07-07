import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthDto } from "./dto/auth.dto";
import { PrismaService} from "../prisma/prisma.service";
import { comparePass, encodePassword } from "../utils/bcrypt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService, // include prisma to be able to use it
    private jwt: JwtService,
    private config: ConfigService
  ) {}


  async signup(dto: AuthDto) {

    // generating hashed password
    const password = encodePassword(dto.password);

    try {
      // save new user in db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) { // saying if error is prisma error
        if (err.code === 'P2002') {
          throw new ForbiddenException('credentials are taken');
        }
      }
      throw err
    }
  }

  async signIn(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Incorrect email address');
    }

    const passwordIsCorrect = comparePass(dto.password, user.password);
    if (!passwordIsCorrect) {
      throw new ForbiddenException('Incorrect Password');
    }
    // return token
    return this.signToken(user.id, user.email);
  }

  // helper function to signToken
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '6h',
      secret,
    });
    return {
      access_token: token,
    };
  }

  async getUser(id) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id
      },
    });
    delete user.password
    console.log(user);
    console.log("ffff");
    return user;
  }
}
