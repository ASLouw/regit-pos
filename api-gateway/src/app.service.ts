import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";
import { CreateUserDto } from "./libs/dto/create-user.dto";


@Injectable()
export class AppService {
  constructor(
    @Inject("SERVICE") private readonly userService: ClientProxy
  ) {}

  pingServiceA(createUserDto: CreateUserDto) {
    const startTs = Date.now();
    const pattern = { cmd: "createUser" };
    const payload = createUserDto
    ;
    return this.userService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs }))
      );
  }
}