import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {InstrumentType} from '../enums/instrument-type.enum';

/**
 * Instruments are devices created or adapted to make musical sounds.
 * Instruments are primarily used in
 * [relationships](https://musicbrainz.org/doc/Relationships) between two other
 * entities and for that, each instrument entity has a parallel [relationship
 * attribute](https://musicbrainz.org/doc/Relationships#Attributes) with the
 * same MBID. Instruments, like relationship attributes, can only be edited by
 * [relationship
 * editors](https://musicbrainz.org/doc/Editor#Relationship_editor). See
 * [Instrument List](https://musicbrainz.org/instruments) for the full list.
 */
@ObjectType({implements: () => [Node]})
export class Instrument implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The instrument name is the name of the instrument, typically the most
   * common name in English.
   */
  name: string;

  /**
   * The type categorises the instrument by the way the sound is created,
   * similar to the
   * [Hornbostel-Sachs](https://en.wikipedia.org/wiki/Hornbostel-Sachs)
   * classification.
   */
  type?: InstrumentType;

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;

  /**
   * The description is a brief description of the main characteristics of the
   * instrument.
   */
  description: string;
}
