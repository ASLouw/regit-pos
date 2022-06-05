import { Module } from '@nestjs/common';
import { PrismaService } from 'libs/prisma/prisma.service';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  imports: [],
  providers: [SalesService, PrismaService],
  controllers: [SalesController],
  exports: [SalesService],
})
export class SalesModule {}
