import {Args, Query, Resolver} from '@nestjs/graphql';
import {Node} from './core/interfaces/node.interface';
import {ID} from './core/scalars/id.scalar';

@Resolver()
export class AppResolver {
  @Query(() => Node, {nullable: true})
  node(@Args('id') id: ID) {}

  @Query(() => String)
  helloWorld() {
    return 'Hello World!';
  }
}
