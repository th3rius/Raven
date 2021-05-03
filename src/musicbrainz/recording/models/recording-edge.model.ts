import {ObjectType} from '@nestjs/graphql';
import {Recording} from './recording.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class RecordingEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  edge: Recording;
}
