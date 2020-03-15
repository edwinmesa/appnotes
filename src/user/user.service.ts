import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
var faker = require('faker');
faker.locale = "es";


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>
    ) { }

    async addUser(createUserDto: CreateUserDto): Promise<Users> {
        /**For Test */
        for (let i = 0; i < 10000; i++) {
            const newUser = new Users();
            newUser.username = faker.internet.userName();
            newUser.fullName = faker.name.firstName() + ' ' + faker.name.lastName();
            newUser.email = faker.internet.email();
            newUser.age = faker.random.number();
            newUser.password = faker.internet.password();
            return await this.userRepository.save(newUser);
        }
        /**Original Code */
        // return await this.userRepository.save(createUserDto);
    }

    async getUsers(): Promise<Users[]> {
        const users = await this.userRepository.find();
        return users;
    }

    async getUser(id: number): Promise<Users> {
        const user = await this.userRepository.findOne(id);
        return user;
    }

    async updateUser(id: number, createUserDto: CreateUserDto): Promise<Users> {
        const userId = await this.userRepository.findOne(id);
        const updateUser = Object.assign(userId, createUserDto);
        return await this.userRepository.save(updateUser);
    }

    async deleteUser(id: number): Promise<any> {
        return await this.userRepository.delete(id);
        // return deleteUser;
    }

}
