import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {WorkEdge} from './work-edge.model';
import {Work} from './work.model';

/**
 * The connection type for Work.
 */
@ObjectType()
export class WorkConnection {
  /**
   * A list of edges.
   */
  edges: WorkEdge[];

  /**
   * A list of nodes.
   */
  nodes: Work[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
