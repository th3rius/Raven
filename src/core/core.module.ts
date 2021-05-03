import {Global, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ElasticsearchModule} from '@nestjs/elasticsearch';
import {GraphQLModule} from '@nestjs/graphql';
import {LogLevel} from '@ogma/logger';
import {OgmaModule} from '@ogma/nestjs-module';
import {GraphQLParser} from '@ogma/platform-graphql';
import {RedisCache} from 'apollo-server-cache-redis';
import {ApolloServerPluginInlineTrace} from 'apollo-server-core';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import Joi from 'joi';
import {executorFactory} from './factories/executor.factory';
import {ComplexityPlugin} from './plugins/complexity.plugin';
import {PrismaService} from './prisma.service';
import {OgmaInterceptorProvider} from './providers/ogma-interceptor.provider';
import {RedisCacheProvider} from './providers/redis-cache.provider';
import {Date} from './scalars/date.scalar';
import {Duration} from './scalars/duration.scalar';
import {ID} from './scalars/id.scalar';
import {Interval} from './scalars/interval.scalar';
import {Time} from './scalars/time.scalar';
import {URI} from './scalars/uri.scalar';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        DATABASE_URL: Joi.string()
          .uri({scheme: /postgres(ql)?/})
          .default('postgresql://localhost'),
        REDIS_URL: Joi.string()
          .uri({scheme: /rediss?/})
          .default('redis://localhost'),
        ELASTICSEARCH_NODE: Joi.string()
          .uri({scheme: /https?/})
          .default('http://localhost:9200'),
        PORT: Joi.number().default(3000),
        LOG_LEVEL: Joi.valid(...Object.keys(LogLevel)).default('LOG'),
      }),
    }),
    ElasticsearchModule.registerAsync({
      imports: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        node: configService.get('ELASTICSEARCH_NODE'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync({
      imports: [RedisCache, ConfigService],
      useFactory: (redisCache: RedisCache, configService: ConfigService) => {
        const plugins = [responseCachePlugin()];
        if (configService.get('NODE_ENV') !== 'production') {
          // Apollo Studio inline tracing. This makes queries slower, so I'm
          // enabling only on development.
          plugins.push(ApolloServerPluginInlineTrace());
        }
        return {
          autoSchemaFile: true,
          cache: redisCache,
          cacheControl: {defaultMaxAge: 360},
          plugins,
          // Required by ogma interceptor
          context: ({req, res}) => ({req, res}),
          executorFactory,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
        };
      },
      inject: [RedisCache, ConfigService],
    }),
    OgmaModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        service: {
          logLevel: configService.get('LOG_LEVEL'),
          application: configService.get('npm_package_name'),
          color: configService.get('NODE_ENV') !== 'production',
        },
        interceptor: {
          gql: GraphQLParser,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    PrismaService,
    ComplexityPlugin,
    Duration,
    Interval,
    Date,
    Time,
    ID,
    URI,
    OgmaInterceptorProvider,
    RedisCacheProvider,
  ],
  exports: [ElasticsearchModule, PrismaService, RedisCache],
})
export class CoreModule {}
