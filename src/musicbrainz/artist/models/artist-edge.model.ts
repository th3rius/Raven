import {ObjectType} from '@nestjs/graphql';
import {Artist} from './artist.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class ArtistEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  edge: Artist;
}
