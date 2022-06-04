import { Module } from '@nestjs/common';
import { ItemsModule } from 'libs/items/items.module';
import { UsersModule } from 'libs/users/users.module';

@Module({
  imports: [UsersModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
