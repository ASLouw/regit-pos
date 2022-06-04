import { Module } from "@nestjs/common";
import { UsersModule } from "libs/users/users.module";
import { AppController } from "./app.controller";

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}