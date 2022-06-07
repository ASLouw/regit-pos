import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8888,
    },
  });
  logger.log('Microservice Service is listening on 0.0.0.0:8080');
  app.listen();

  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: { retryAttempts: 5, retryDelay: 3000 },
  // });

  // await app.startAllMicroservices();
  // await app.listen(8888);
  // console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
