import { Controller, Post, Body, Res, HttpStatus, Get, Param, Put, Query, NotFoundException, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('')
    async createUser(@Res() res, @Body() createUserDto: CreateUserDto) {
        try {
            const user = await this.userService.addUser(createUserDto);
            return res.status(HttpStatus.OK).json({
                msg: "User Create Successfully",
                user
            })
        } catch (error) {
            if (error) throw new NotFoundException('Error at created user');
        }
    }

    @Get('')
    async getUsers(@Res() res) {
        try {
            const users = await this.userService.getUsers();
            return res.status(HttpStatus.OK).json(users)
        } catch (error) {
            if (error) throw new NotFoundException('Error in Query');
        }
    }

    @Get(':id')
    async getUser(@Res() res, @Param('id') id) {
        try {
            const user = await this.userService.getUser(id);
            return res.status(HttpStatus.OK).json(user);
        } catch (error) {
            if (error) throw new NotFoundException('User does not exist');
        }
    }

    @Put(':id')
    async updateUser(@Res() res, @Body() createUserDto: CreateUserDto, @Param('id') id) {
        try {
            const updateUser = await this.userService.updateUser(id, createUserDto);
            return res.status(HttpStatus.OK).json({
                msg: "User Update Successfully",
                updateUser
            });
        } catch (error) {
            if (error) throw new NotFoundException('User does not exist');
        }
    }

    @Delete(':id')
    async deletUser(@Res() res, @Param('id') id) {
        try {
            const deletUser = await this.userService.deleteUser(id);
            return res.status(HttpStatus.OK).json({
                msg: 'User Deleted Successfully',
                deletUser
            });
        } catch (error) {
            if (error) throw new NotFoundException('User cant not delete');
        }
    }

}
