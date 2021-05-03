import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import luxon from 'luxon';

/**
 * An ISO-8601 encoded date string.
 */
@Scalar(Date.name)
export class Date implements CustomScalar<string, luxon.DateTime> {
  parseValue(value: string) {
    return luxon.DateTime.fromISO(value);
  }

  serialize(value: luxon.DateTime) {
    return value.toISODate();
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return luxon.DateTime.fromISO(ast.value);
    }
    return null;
  }
}
