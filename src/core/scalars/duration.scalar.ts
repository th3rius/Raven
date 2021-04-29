import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import {Duration} from 'luxon';

/**
 * Duration custom scalar type
 */
@Scalar('Duration')
export class DurationScalar implements CustomScalar<number, Duration> {
  parseValue(value: number) {
    return Duration.fromMillis(value);
  }

  serialize(value: Duration) {
    return value.milliseconds;
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.INT) {
      return Duration.fromMillis(+ast.value);
    }
    return null;
  }
}
