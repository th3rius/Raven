import {GraphQLSchemaHost, Plugin} from '@nestjs/graphql';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';
import {GraphQLError} from 'graphql';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from 'graphql-query-complexity';

@Plugin()
export class ComplexityPlugin implements ApolloServerPlugin {
  constructor(private gqlSchemaHost: GraphQLSchemaHost) {}

  requestDidStart(): GraphQLRequestListener {
    const {schema} = this.gqlSchemaHost;

    return {
      didResolveOperation({request, document}) {
        const complexity = getComplexity({
          schema,
          operationName: request.operationName,
          query: document,
          variables: request.variables,
          estimators: [
            fieldExtensionsEstimator(),
            simpleEstimator({defaultComplexity: 1}),
          ],
        });
        if (complexity >= 60) {
          throw new GraphQLError(
            'Query exceeded the maximum allowed complexity of 60.'
          );
        }
      },
    };
  }
}
