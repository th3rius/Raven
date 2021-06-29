import {Field, InterfaceType} from '@nestjs/graphql';
import {ID} from '../scalars/id.scalar';

/**
 * An object with an ID.
 */
@InterfaceType()
export abstract class Node {
  /**
   * ID of the object.
   */
  @Field(() => ID)
  id: string;
}
