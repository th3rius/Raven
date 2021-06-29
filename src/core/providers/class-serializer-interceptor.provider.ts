import {ClassProvider, ClassSerializerInterceptor} from '@nestjs/common';
import {APP_INTERCEPTOR} from '@nestjs/core';

export const ClassSerializerInterceptorProvider: ClassProvider<ClassSerializerInterceptor> =
  {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  };
