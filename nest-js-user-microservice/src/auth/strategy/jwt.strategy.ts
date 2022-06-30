// logic to verify the Bearer token - strategy. dont forget to import as provider in authModule
// we can have strategies ex. login with facebook, google etc.
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class JwtStrategy  extends PassportStrategy(
  Strategy,
  "jwt", // provide name
  ) { // since we are extending we need to call its constructor
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }
}
