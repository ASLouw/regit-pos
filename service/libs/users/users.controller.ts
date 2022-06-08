import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Prisma } from '.prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @MessagePattern({ cmd: 'updateUser' })
  update(@Payload() updateUserDto: UpdateUserDto) {
    const id = updateUserDto.id    
    return this.userService.updateUser({where:{id}, data:{name:updateUserDto.name, role:updateUserDto.role} });
  }

  @MessagePattern({ cmd: 'getUser' })
  get(@Payload() id: number) {
    const user:Prisma.UserWhereUniqueInput = {id}
    return this.userService.user(user );
  }

  @MessagePattern({ cmd: 'getUsers' })
  getUsers( ) {
    return this.userService.users({ where: {} });
  }
}
