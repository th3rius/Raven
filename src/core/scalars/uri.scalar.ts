import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';
import {normalize} from 'uri-js';

/**
 * An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.
 */
@Scalar(URI.name)
export class URI implements CustomScalar<string, string> {
  parseValue(value: string) {
    return normalize(value);
  }

  serialize(value: string) {
    return value;
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return normalize(ast.value);
    }
    return null;
  }
}
