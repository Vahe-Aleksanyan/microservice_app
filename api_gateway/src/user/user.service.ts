import { Injectable } from '@nestjs/common';

import { EditUserDto } from "./dto";
import { UserModule } from "./user.module";
import { User } from "@prisma/client";


@Injectable()
export class UserService {
  constructor() {}

  // async editUser(userId: number, dto: EditUserDto): Promise<User> {
  //   console.log('here');
  //   const user = await this.prisma.user.update({
  //     where: {
  //       id: userId,
  //     },
  //     data: {
  //       ...dto,
  //     },
  //   });
  //   delete user.hash;
  //   return user;
  // }
}