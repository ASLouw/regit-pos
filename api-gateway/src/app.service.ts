import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";
import { CreateItemDto } from "./libs/dto/create-item.dto";
import { CreateSaleDto } from "./libs/dto/create-sale.dto";
import { CreateUserDto } from "./libs/dto/create-user.dto";
import { UpdateItemDto } from "./libs/dto/update-item.dto";
import { UpdateSaleDto } from "./libs/dto/update-sale.dto";
import { UpdateUserDto } from "./libs/dto/update-user.dto";


@Injectable()
export class AppService {
  constructor(
    @Inject("SERVICE") private readonly service: ClientProxy
  ) {}

  // Users
  createUser(createUserDto: CreateUserDto) {
    const pattern = { cmd: "createUser" };
    const payload = createUserDto;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const pattern = { cmd: "updateUser" };
    const payload = updateUserDto;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getUser(id:number) {    
    const pattern = { cmd: "getUser" };
    const payload = id;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getUsers() {    
    const pattern = { cmd: "getUsers" };
    const payload = {};
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

   // Items
   createItem(createItemDto: CreateItemDto) {
    const pattern = { cmd: "createItem" };
    const payload = createItemDto;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  updateItem(updateItemDto: UpdateItemDto) {
    const pattern = { cmd: "updateItem" };
    const payload = updateItemDto;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getItem(id:number) {    
    const pattern = { cmd: "getItem" };
    const payload = id;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getItems() {    
    const pattern = { cmd: "getItems" };
    const payload = {};
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }


  // Sales
  createSale(createSaleDto: CreateSaleDto) {
    const pattern = { cmd: "createSale" };
    const payload = createSaleDto;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  updateSale(updateSaleDto: UpdateSaleDto) {
    const pattern = { cmd: "updateSale" };
    const payload = updateSaleDto;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getSale(id:number) {    
    const pattern = { cmd: "getSale" };
    const payload = id;
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }

  getSales() {    
    const pattern = { cmd: "getSales" };
    const payload = {};
    return this.service
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }
}