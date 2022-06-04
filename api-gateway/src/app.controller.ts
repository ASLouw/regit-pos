import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateUserDto } from "./libs/dto/create-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/users/createUser")
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Post("/users/getUser")
  getUser(@Body() id: number) {
    return this.appService.getUser(id);
  }

  @Post("/users/getUsers")
  getUsers() {
    return this.appService.getUsers();
  }
}