import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateUserDto } from "./libs/dto/create-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/ping-a")
  pingServiceA(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.appService.pingServiceA(createUserDto);
  }
}