import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @Post('register')
  // create(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.usersService.create(createUserDto);
  // }

  @MessagePattern({ cmd: "user" })
  ping(@Payload() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);

    // return of("pong");
  }

  @Post('user')
  async signupUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  // @Get()
  // findAll(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.usersService.findOne(id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.usersService.remove(id);
  // }
}