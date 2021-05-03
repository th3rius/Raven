import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import luxon from 'luxon';

/**
 * An ISO-8601 encoded time string.
 */
@Scalar(Time.name)
export class Time implements CustomScalar<string, luxon.DateTime> {
  parseValue(value: string) {
    return luxon.DateTime.fromISO(value);
  }

  serialize(value: luxon.DateTime) {
    return value.toISOTime();
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return luxon.DateTime.fromISO(ast.value);
    }
    return null;
  }
}
