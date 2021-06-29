import {Plugin} from '@nestjs/graphql';
import {ApolloServerPlugin} from 'apollo-server-plugin-base';

@Plugin()
export class ComplexityPlugin implements ApolloServerPlugin {
  requestDidStart(requestContext: any) {
    // console.log(requestContext);
  }
}
