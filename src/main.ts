import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {OgmaService} from '@ogma/nestjs-module';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: false});
  const logger = app.get(OgmaService);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT')!;

  Sentry.init({
    release: configService.get('RELEASE'),
    integrations: [
      new Sentry.Integrations.Http({tracing: true}),
      new Tracing.Integrations.Express({
        app: app.getHttpAdapter().getInstance(),
      }),
    ],
  });

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(Sentry.Handlers.errorHandler());
  app.useLogger(logger);
  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

void bootstrap();
