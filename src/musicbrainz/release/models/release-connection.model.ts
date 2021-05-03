import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {ReleaseEdge} from './release-edge.model';
import {Release} from './release.model';

/**
 * The connection type for Release.
 */
@ObjectType()
export class ReleaseConnection {
  /**
   * A list of edges.
   */
  edges: ReleaseEdge[];

  /**
   * A list of nodes.
   */
  nodes: Release[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
