import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";
import { CreateItemDto } from "./libs/dto/create-item.dto";
import { CreateUserDto } from "./libs/dto/create-user.dto";
import { UpdateItemDto } from "./libs/dto/update-item.dto";
import { UpdateUserDto } from "./libs/dto/update-user.dto";


@Injectable()
export class AppService {
  constructor(
    @Inject("SERVICE") private readonly userService: ClientProxy
  ) {}

  // Users
  createUser(createUserDto: CreateUserDto) {
    const pattern = { cmd: "createUser" };
    const payload = createUserDto;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const pattern = { cmd: "updateUser" };
    const payload = updateUserDto;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getUser(id:number) {    
    const pattern = { cmd: "getUser" };
    const payload = id;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getUsers() {    
    const pattern = { cmd: "getUsers" };
    const payload = {};
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

   // Items
   createItem(createItemDto: CreateItemDto) {
    const pattern = { cmd: "createItem" };
    const payload = createItemDto;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  updateItem(updateItemDto: UpdateItemDto) {
    const pattern = { cmd: "updateItem" };
    const payload = updateItemDto;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getItem(id:number) {    
    const pattern = { cmd: "getItem" };
    const payload = id;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getItems() {    
    const pattern = { cmd: "getItems" };
    const payload = {};
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }
}