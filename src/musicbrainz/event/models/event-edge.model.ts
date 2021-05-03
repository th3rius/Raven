import {ObjectType} from '@nestjs/graphql';
import {Event} from './event.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class EventEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  edge: Event;
}
