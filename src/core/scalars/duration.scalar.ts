import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import * as luxon from 'luxon';

/**
 * An ISO-8601 encoded duration string.
 */
@Scalar(Duration.name)
export class Duration implements CustomScalar<string, number> {
  parseValue(value: string) {
    return luxon.Duration.fromISO(value).toMillis();
  }

  serialize(value: number) {
    return luxon.Duration.fromMillis(value).toISO();
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return luxon.Duration.fromISO(ast.value).toMillis();
    }
    return null;
  }
}
