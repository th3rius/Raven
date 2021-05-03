import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import luxon from 'luxon';

/**
 * An ISO-8601 encoded duration string.
 */
@Scalar(Duration.name)
export class Duration implements CustomScalar<string, luxon.Duration> {
  parseValue(value: string) {
    return luxon.Duration.fromISO(value);
  }

  serialize(value: luxon.Duration) {
    return value.toISO();
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return luxon.Duration.fromISO(ast.value);
    }
    return null;
  }
}
