import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {EventEdge} from './event-edge.model';
import {Event} from './event.model';

/**
 * The connection type for Event.
 */
@ObjectType()
export class EventConnection {
  /**
   * A list of edges.
   */
  edges: EventEdge[];

  /**
   * A list of nodes.
   */
  nodes: Event[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
