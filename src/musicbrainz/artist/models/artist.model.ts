import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {Interval} from '../../../core/scalars/interval.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {Area} from '../../area/models/area.model';
import {ArtistType} from '../enums/artist-type.enum';
import {Gender} from '../enums/gender.enum';

/**
 * An artist is generally a musician (or musician persona), group of musicians,
 * or other music professional (like a producer or engineer). Occasionally, it
 * can also be a non-musical person (like a photographer, an illustrator, or a
 * poet whose writings are set to music), or even a fictional character. For
 * some other special cases, see [special purpose
 * artists](https://musicbrainz.org/doc/Style/Unknown_and_untitled/Special_purpose_artist).
 */
@ObjectType({implements: [Node]})
export class Artist implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The official name of an artist, be it a person or a band.
   */
  name: string;

  /**
   * The sort name is a variant of the artist name which would be used when
   * sorting artists by name, such as in record shops or libraries. Among other
   * things, sort names help to ensure that all the artists that start with
   * "The" don't end up up under "T".
   */
  sortName: string;

  /**
   * The type is used to state whether an artist is a person, a group, or
   * something else.
   */
  type?: ArtistType;

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;

  /**
   * The begin and end dates indicate when an artist started and finished.
   */
  lifeSpan: Interval;

  /**
   * The International Standard Name Identifier for the artist. See
   * [ISNI](https://musicbrainz.org/doc/ISNI) for more information.
   */
  isni?: string;

  /**
   * An IPI (interested party information) code is an identifying number
   * assigned by the CISAC database for musical rights management. See
   * [IPI](https://musicbrainz.org/doc/IPI) for more information, including how
   * to find these codes.
   */
  ipi?: string;

  /**
   * The gender is used to explicitly state whether a person or character
   * identifies as male, female or neither. Groups do not have genders.
   */
  gender?: Gender;

  /**
   * The artist area, as the name suggests, indicates the area with which an
   * artist is primarily identified with. It is often, but not always, its
   * birth/formation country.
   */
  area: Area;

  /**
   * The URLs linked to this artist.
   */
  urls: URI[];
}
