import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {ReleaseGroupEdge} from './release-group-edge.model';
import {ReleaseGroup} from './release-group.model';

/**
 * The connection type for ReleaseGroup.
 */
@ObjectType()
export class ReleaseGroupConnection {
  /**
   * A list of edges.
   */
  edges: ReleaseGroupEdge[];

  /**
   * A list of nodes.
   */
  nodes: ReleaseGroup[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
