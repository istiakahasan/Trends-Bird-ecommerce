import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://trends-bird-frontend-hx7n.onrender.com',
    ],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('E-Commerce API')
    .setDescription('E-Commerce Backend API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
