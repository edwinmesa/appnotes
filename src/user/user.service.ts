import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>
    ) { }

    async addUser(createUserDto: CreateUserDto): Promise<Users>{
        return await this.userRepository.save(createUserDto);
    }

    async getUsers(): Promise<Users[]> {
        const users = await this.userRepository.find();
        return users;
    }

}
