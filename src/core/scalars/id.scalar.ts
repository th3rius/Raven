import {CustomScalar, Scalar} from '@nestjs/graphql';
import {Kind, ValueNode} from 'graphql';

/**
 * Represents a unique identifier that is Base64 obfuscated. It is often used
 * to refetch an object or as key for a cache. The ID type appears in a JSON
 * response as a String; however, it is not intended to be human-readable. When
 * expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer
 * (such as `4`) input value will be accepted as an ID.
 */
@Scalar(ID.name)
export class ID implements CustomScalar<string, string> {
  parseValue(value: string) {
    return value;
  }

  serialize(value: string) {
    return value;
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return null;
  }
}
