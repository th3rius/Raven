import {ObjectType} from '@nestjs/graphql';
import {PageInfo} from '../../../core/models/page-info.model';
import {LabelEdge} from './label-edge.model';
import {Label} from './label.model';

/**
 * The connection type for Label.
 */
@ObjectType()
export class LabelConnection {
  /**
   * A list of edges.
   */
  edges: LabelEdge[];

  /**
   * A list of nodes.
   */
  nodes: Label[];

  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;

  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}
