import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {OgmaService} from '@ogma/nestjs-module';
import {Prisma, PrismaClient} from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
  implements OnModuleInit, OnModuleDestroy
{
  constructor(logger: OgmaService) {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'error',
        },
        {
          emit: 'event',
          level: 'warn',
        },
      ],
    });

    this.$on('query', ({query, duration}) => {
      logger.debug(`${query} ${duration}ms`, PrismaService.name);
    });

    this.$on('warn', ({message}) => {
      logger.warn(message, PrismaService.name);
    });

    this.$on('error', ({message}) => {
      logger.error(message, PrismaService.name);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

new PrismaClient().artist;
