import { Module } from '@nestjs/common';
import { PrismaService } from 'libs/prisma/prisma.service';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [],
  providers: [ItemsService, PrismaService],
  controllers: [ItemsController],
  exports: [ItemsService],
})
export class ItemsModule {}
