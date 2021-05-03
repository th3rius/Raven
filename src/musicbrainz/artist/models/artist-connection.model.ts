import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {ArtistEdge} from './artist-edge.model';
import {Artist} from './artist.model';

/**
 * The connection type for Artist.
 */
@ObjectType()
export class ArtistConnection {
  /**
   * A list of edges.
   */
  edges: ArtistEdge[];

  /**
   * A list of nodes.
   */
  nodes: Artist[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
