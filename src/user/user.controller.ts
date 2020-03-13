import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/createuser')
    async createUser(@Res() res, @Body() createUserDto: CreateUserDto) {
        const user = await this.userService.addUser(createUserDto);
        return res.status(HttpStatus.OK).json({
            msg: "User Create Successfully",
            user
        })
    }

    @Get('/allusers')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users)
    }

}
