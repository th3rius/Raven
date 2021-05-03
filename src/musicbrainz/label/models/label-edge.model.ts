import {ObjectType} from '@nestjs/graphql';
import {Label} from './label.model';

/**
 * An edge in a connection.
 */
@ObjectType()
export class LabelEdge {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;

  /**
   * The item at the end of the edge.
   */
  edge: Label;
}
