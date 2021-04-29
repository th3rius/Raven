import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {OgmaService} from '@ogma/nestjs-module';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: false});
  const logger = app.get(OgmaService);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT')!;
  app.useLogger(logger);
  await app.listen(port);
}

bootstrap();
