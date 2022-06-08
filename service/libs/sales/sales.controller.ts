import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateSaleDto } from '../dto/create-sale.dto';
import { SalesService } from './sales.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateSaleDto } from '../dto/update-sale.dto';
import { Prisma } from '.prisma/client';

@Controller('sales')
export class SalesController {
  constructor(private readonly saleService: SalesService) {}

  @MessagePattern({ cmd: 'createSale' })
  create(@Payload() createSaleDto: CreateSaleDto) {
    return this.saleService.createSale(createSaleDto);
  }

  @MessagePattern({ cmd: 'updateSale' })
  update(@Payload() updateSaleDto: UpdateSaleDto) {
    const id = updateSaleDto.id    
    return this.saleService.updateSale({where:{id}, data:{totalPrice:updateSaleDto.totalPrice,items:updateSaleDto.items} });
  }

  @MessagePattern({ cmd: 'getSale' })
  get(@Payload() id: number) {
    const sale:Prisma.SaleWhereUniqueInput = {id}
    return this.saleService.sale(sale );
  }

  @MessagePattern({ cmd: 'getSales' })
  getSales( ) {
    return this.saleService.sales({ where: {} });
  }
}
