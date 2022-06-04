import { Module } from '@nestjs/common';
import { PrismaService } from 'libs/prisma/prisma.service';
import { UsersController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [],
  providers: [ItemsService, PrismaService],
  controllers: [UsersController],
  exports: [ItemsService],
})
export class UsersModule {}
