import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {RecordingEdge} from './recording-edge.model';
import {Recording} from './recording.model';

/**
 * The connection type for Recording.
 */
@ObjectType()
export class RecordingConnection {
  /**
   * A list of edges.
   */
  edges: RecordingEdge[];

  /**
   * A list of nodes.
   */
  nodes: Recording[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
