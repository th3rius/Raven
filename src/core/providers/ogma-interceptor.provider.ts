import {ClassProvider} from '@nestjs/common';
import {APP_INTERCEPTOR} from '@nestjs/core';
import {OgmaInterceptor} from '@ogma/nestjs-module';

export const OgmaInterceptorProvider: ClassProvider<OgmaInterceptor> = {
  provide: APP_INTERCEPTOR,
  useClass: OgmaInterceptor,
};
