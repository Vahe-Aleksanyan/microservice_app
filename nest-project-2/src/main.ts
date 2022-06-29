// the user calls the  /subscribers endpoint in our monolithic app,
//     our application calls the microservice to get the necessary data,
//     the microservice retrieves the data from its own database,
//     our main application responds with the data.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Bookmark App')
    .setDescription('The Bookmarks API, built with Nest js')
    .setVersion('1.0')
    .addTag('Bookmarks')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
  // console.log("listening to 3001")
  // first works here producer

}

bootstrap();
