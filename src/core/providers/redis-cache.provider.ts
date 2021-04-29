import {FactoryProvider} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {RedisCache} from 'apollo-server-cache-redis';

export const RedisCacheProvider: FactoryProvider<RedisCache> = {
  provide: RedisCache,
  useFactory: (configService: ConfigService) =>
    new RedisCache(configService.get('REDIS_URL')),
  inject: [ConfigService],
};
