import {ArgsType} from '@nestjs/graphql';
import {ID} from '../../../core/scalars/id.scalar';

@ArgsType()
export class LabelArgs {
  /**
   * ID of the object.
   */
  id: ID;
}
