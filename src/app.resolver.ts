import {Resolver, Query} from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  helloWorld() {
    return 'Hello World!';
  }
}
