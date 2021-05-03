import {ObjectType} from '@nestjs/graphql';

/**
 * Information about pagination in a connection.
 */
@ObjectType()
export class PageInfo {
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: string;

  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;

  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;

  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: string;
}
