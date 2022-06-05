import { Module } from '@nestjs/common';
import { ItemsModule } from 'libs/items/items.module';
import { ReportsModule } from 'libs/reports/reports.module';
import { SalesModule } from 'libs/sales/sales.module';
import { UsersModule } from 'libs/users/users.module';

@Module({
  imports: [UsersModule, ItemsModule, SalesModule, ReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
