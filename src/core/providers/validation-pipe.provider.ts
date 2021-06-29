import {ValidationPipe, ValueProvider} from '@nestjs/common';
import {APP_PIPE} from '@nestjs/core';

export const ValidationPipeProvider: ValueProvider<ValidationPipe> = {
  provide: APP_PIPE,
  useValue: new ValidationPipe({whitelist: true, transform: true}),
};
