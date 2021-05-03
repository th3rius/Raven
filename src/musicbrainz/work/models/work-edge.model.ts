import {ObjectType} from '@nestjs/graphql';
import {Work} from './work.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class WorkEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  edge: Work;
}
