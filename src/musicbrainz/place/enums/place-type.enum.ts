import {registerEnumType} from '@nestjs/graphql';

/**
 * The type categorises the place based on its primary function.
 */
export enum PlaceType {
  /**
   * A place designed for non-live production of music, typically a recording
   * studio.
   */
  Studio = 1,

  /**
   * A place that has live artistic performances as one of its primary
   * functions, such as a concert hall.
   */
  Venue,

  /**
   * Anything which does not fit into the other categories.
   */
  Other,

  /**
   * A place whose main purpose is to host outdoor sport events, typically
   * consisting of a pitch surrounded by a structure for spectators with no
   * roof, or a roof which can be retracted.
   */
  Stadium,

  /**
   * A place consisting of a large enclosed area with a central event space
   * surrounded by tiered seating for spectators, which can be used for indoor
   * sports, concerts and other entertainment events.
   */
  IndoorArena,

  /**
   * A place mostly designed and used for religious purposes, like a church,
   * cathedral or synagogue.
   */
  ReligiousBuilding,

  /**
   * A school, university or other similar educational institution (especially,
   * but not only, one where music is taught)
   */
  EducationalInstitution,

  /**
   * A place (generally a factory) at which physical media are manufactured.
   */
  PressingPlant,
}

registerEnumType(PlaceType, {name: 'PlaceType'});
