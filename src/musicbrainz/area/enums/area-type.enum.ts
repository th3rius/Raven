import {registerEnumType} from '@nestjs/graphql';

/**
 * The type of area.
 */
export enum AreaType {
  /**
   * Country is used for areas included (or previously included) in [ISO
   * 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1), e.g. [United
   * States](https://musicbrainz.org/area/489ce91b-6658-3307-9877-795b68554c98).
   */
  Country = 1,

  /**
   * Subdivision is used for the main administrative divisions of a country,
   * e.g.
   * [California](https://musicbrainz.org/area/ae0110b6-13d4-4998-9116-5b926287aa23),
   * [Ontario](https://musicbrainz.org/area/2747553f-b44d-44c4-a7c3-b67412b6f10b),
   * [Okinawa](https://musicbrainz.org/area/ff6ef0b9-0b41-4697-bd55-8619ad4a196c).
   * These are considered when displaying the parent areas for a given area.
   */
  Subdivision,

  /**
   * City is used for settlements of any size, including towns and villages.
   */
  City,

  /**
   * Municipality is used for small administrative divisions which, for urban
   * municipalities, often contain a single city and a few surrounding
   * villages. Rural municipalities typically group several villages together.
   */
  Municipality,

  /**
   * District is used for a division of a large city, e.g.
   * [Queens](https://musicbrainz.org/area/431a085b-9f4c-4fbb-82de-2ca7ce735da8).
   */
  District,

  /**
   * Island is used for islands and atolls which don't form subdivisions of
   * their own, e.g.
   * [Skye](https://musicbrainz.org/area/d572815d-3a09-4091-9b32-7784020f1438).
   * These are not considered when displaying the parent areas for a given
   * area.
   */
  Island,

  /**
   * County is used for smaller administrative divisions of a country which are
   * not the main administrative divisions but are also not municipalities,
   * e.g. counties in the USA. These are not considered when displaying the
   * parent areas for a given area.
   */
  County,

  /**
   * Used for any military bases that are large enough to be considered an
   * area, not just a place
   */
  MilitaryBase,

  /**
   * Used for semi-autonomous territories governed by indigenous peoples, such
   * as Indian reserves/reservations in North America and indigenous
   * territories in Central and South America.
   */
  IndigenousTerritoryReserve,
}

registerEnumType(AreaType, {name: 'AreaType'});
