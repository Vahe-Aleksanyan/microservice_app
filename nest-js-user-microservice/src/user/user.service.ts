// create a very straightforward service to add and list email subscribers.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import {AuthDto} from './dto/createUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
   // constructor(
        // @InjectRepository(User)
        // private userRepository: Repository<User>,
    //) {}

    // async addUser(user: AuthDto) {
    //     const newUser = await this.userRepository.create(user);
    //     await this.userRepository.save(newUser);
    //     return newUser;
    // }

    async getAllUsers() {
        //return this.userRepository.find();
        return "dfdf";
    }
}
