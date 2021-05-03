import {registerEnumType} from '@nestjs/graphql';

/**
 * The type is used to state whether an artist is a person, a group, or
 * something else.
 */
export enum ArtistType {
  /**
   * This indicates an individual person, be it under its legal name (“John
   * Lennon”), or a performance name (“Sting”).
   */
  Person = 1,

  /**
   * A grouping of multiple musicians who perform together (in some cases, some
   * or all of the members might differ in different performances or
   * recordings).
   */
  Group,

  /**
   * Anything which does not fit into the other categories.
   */
  Other,

  /**
   * This indicates an individual fictional character (whether a fictional
   * person, animal or any other kind of character).
   */
  Character,

  /**
   * This indicates an orchestra (an organized, usually large group of
   * instrumentalists). Smaller ensembles (such as trios and quartets) and
   * groupings that do not generally call themselves orchestras are better
   * entered as “Group”.
   */
  Orchestra,

  /**
   * This indicates a choir/chorus (an organized, usually large group of
   * singers). Smaller vocal ensembles and groupings that do not generally call
   * themselves choirs are better entered as “Group”.
   */
  Choir,
}

registerEnumType(ArtistType, {name: 'ArtistType'});
