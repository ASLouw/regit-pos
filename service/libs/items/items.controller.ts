import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateItemDto } from 'libs/dto/create-item.dto';
import { UpdateItemDto } from 'libs/dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @MessagePattern({ cmd: 'createItem' })
  create(@Payload() createItemDto: CreateItemDto) {
    return this.itemService.createItem(createItemDto);
  }

  @MessagePattern({ cmd: 'getItem' })
  get(@Payload() id: number) {
    return this.itemService.item({ id });
  }

  @MessagePattern({ cmd: 'getItems' })
  getItems( ) {
    return this.itemService.items({ where: {} });
  }

  @MessagePattern({ cmd: 'updateItem' })
  update(@Payload() updateItemDto: UpdateItemDto) {
    const id = updateItemDto.id    
    return this.itemService.updateItem({where:{id}, data:{name:updateItemDto.name, price:updateItemDto.price} });
  }
}
