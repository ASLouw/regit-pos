import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";
import { CreateUserDto } from "./libs/dto/create-user.dto";


@Injectable()
export class AppService {
  constructor(
    @Inject("SERVICE") private readonly userService: ClientProxy
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const pattern = { cmd: "createUser" };
    const payload = createUserDto;
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
}