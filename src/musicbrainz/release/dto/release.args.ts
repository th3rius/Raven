import {ArgsType} from '@nestjs/graphql';
import {ID} from '../../../core/scalars/id.scalar';

@ArgsType()
export class ReleaseArgs {
  /**
   * ID of the object.
   */
  id: string;
}
