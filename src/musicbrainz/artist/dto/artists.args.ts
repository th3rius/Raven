import {ArgsType} from '@nestjs/graphql';

@ArgsType()
export class ArtistsArgs {
  /**
   * Returns the elements in the list that come after the specified cursor.
   */
  after?: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string;

  /**
   * Returns the first *n* elements from the list.
   */
  first?: number;

  /**
   * Returns the last *n* elements from the list.
   */
  last?: number;

  /**
   * The search string to look for.
   */
  query: string;
}
