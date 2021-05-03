import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import luxon from 'luxon';

/**
 * An ISO-8601 encoded interval string.
 */
@Scalar(Interval.name)
export class Interval implements CustomScalar<string, luxon.Interval> {
  parseValue(value: string) {
    return luxon.Interval.fromISO(value);
  }

  serialize(value: luxon.Interval) {
    return value.toISO();
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return luxon.Interval.fromISO(ast.value);
    }
    return null;
  }
}
