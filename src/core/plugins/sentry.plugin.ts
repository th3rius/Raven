import {Plugin} from '@nestjs/graphql';
import * as Sentry from '@sentry/node';
import {ApolloError} from 'apollo-server-express';
import {ApolloServerPlugin} from 'apollo-server-plugin-base';
import {
  BaseContext,
  GraphQLRequestContextDidEncounterErrors,
} from 'apollo-server-types';

@Plugin()
export class SentryPlugin implements ApolloServerPlugin {
  requestDidStart() {
    return {
      didEncounterErrors(
        ctx: GraphQLRequestContextDidEncounterErrors<BaseContext>
      ) {
        // If we couldn't parse the operation, don't do anything here
        if (!ctx.operation) {
          return;
        }
        for (const err of ctx.errors) {
          // Only report internal server errors, all errors extending
          // ApolloError should be user-facing
          if (err instanceof ApolloError) {
            continue;
          }
          // Add scoped report details and send to Sentry
          Sentry.withScope(scope => {
            // Retrieve the transaction ID from our request headers
            const transactionId =
              ctx.request.http?.headers.get('x-transaction-id');
            if (transactionId) {
              scope.setTransaction(transactionId);
            }
            // Annotate whether failing operation was
            // query/mutation/subscription
            scope.setTag('kind', ctx.operation?.operation);
            // Log query and variables as extras (make sure to strip out
            // sensitive data!)
            scope.setExtra('query', ctx.request.query);
            scope.setExtra('variables', ctx.request.variables);
            if (err.path) {
              // We can also add the path as breadcrumb
              scope.addBreadcrumb({
                category: 'query-path',
                message: err.path.join(' > '),
                level: Sentry.Severity.Debug,
              });
            }
            Sentry.captureException(err);
          });
        }
      },
    };
  }
}
