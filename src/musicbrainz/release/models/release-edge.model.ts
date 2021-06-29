import {ObjectType} from '@nestjs/graphql';
import {Release} from './release.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class ReleaseEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  node: Release;
}
