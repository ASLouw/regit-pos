import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateItemDto } from "./libs/dto/create-item.dto";
import { CreateUserDto } from "./libs/dto/create-user.dto";
import { UpdateItemDto } from "./libs/dto/update-item.dto";
import { UpdateUserDto } from "./libs/dto/update-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// Users
  @Post("/users/createUser")
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Post("/users/updateUser")
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.appService.updateUser(updateUserDto);
  }

  @Post("/users/getUser")
  getUser(@Body() id: number) {
    return this.appService.getUser(id);
  }

  @Post("/users/getUsers")
  getUsers() {
    return this.appService.getUsers();
  }

  // Items
  @Post("/items/createItem")
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.appService.createItem(createItemDto);
  }

  @Post("/items/updateItem")
  updateItem(@Body() updateItemDto: UpdateItemDto) {
    return this.appService.updateItem(updateItemDto);
  }

  @Post("/items/getItem")
  getItem(@Body() id: number) {
    return this.appService.getItem(id);
  }

  @Post("/items/getItems")
  getItems() {
    return this.appService.getItems();
  }
}