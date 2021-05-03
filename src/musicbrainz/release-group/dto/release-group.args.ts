import {ArgsType} from '@nestjs/graphql';
import {ID} from '../../../core/scalars/id.scalar';

@ArgsType()
export class ReleaseGroupArgs {
  /**
   * ID of the object.
   */
  id: ID;
}
