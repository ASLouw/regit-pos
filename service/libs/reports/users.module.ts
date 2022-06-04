import { Module } from '@nestjs/common';
import { PrismaService } from 'libs/prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersService,PrismaService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}

