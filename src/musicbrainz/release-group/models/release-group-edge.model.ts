import {ObjectType} from '@nestjs/graphql';
import {ReleaseGroup} from './release-group.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class ReleaseGroupEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  edge: ReleaseGroup;
}
