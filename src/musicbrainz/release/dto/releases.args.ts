import {ArgsType} from '@nestjs/graphql';
import {
  IsBase64,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Max,
} from 'class-validator';

@ArgsType()
export class ReleasesArgs {
  /**
   * Returns the elements in the list that come after the specified cursor.
   */
  @IsBase64()
  @IsOptional()
  after?: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  @IsBase64()
  @IsOptional()
  before?: string;

  /**
   * Returns the first *n* elements from the list.
   */
  @IsPositive()
  @Max(100)
  @IsOptional()
  first?: number;

  /**
   * Returns the last *n* elements from the list.
   */
  @IsPositive()
  @Max(100)
  @IsOptional()
  last?: number;

  /**
   * The search string to look for.
   */
  @IsNotEmpty()
  @IsOptional()
  query?: string;
}
