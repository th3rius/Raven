import {ObjectType} from '@nestjs/graphql';

/**
 * Object containing the keys "250", "500", and "1200" linking to thumbnails of
 * those sizes (in pixels); "small" and "large" are deprecated keys and are
 * equivalent to "250" and "500", respectively.
 */
@ObjectType()
export class Thumbnails {
  250?: string;
  500?: string;
  1200?: string;
}
