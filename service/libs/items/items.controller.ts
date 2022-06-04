import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateItemDto } from 'libs/dto/create-item.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly itmeService: ItemsService) {}

  @MessagePattern({ cmd: 'createItem' })
  create(@Payload() createItemDto: CreateItemDto) {
    return this.itmeService.createItem(createItemDto);
  }

  @MessagePattern({ cmd: 'getItem' })
  get(@Payload() id: number) {
    return this.itmeService.item({ id });
  }

  @MessagePattern({ cmd: 'getItems' })
  getItems( ) {
    return this.itmeService.items({ where: {} });
  }
}
