import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {WorkType} from '../enums/work-type.enum';

/**
 * In MusicBrainz terminology, a work is a distinct intellectual or artistic
 * creation, which can be expressed in the form of one or more audio
 * recordings. While a work in MusicBrainz is usually musical in nature, it is
 * not necessarily so. For example, a work could be a novel, play, poem or
 * essay, later recorded as an oratory or audiobook.
 */
@ObjectType({implements: () => [Node]})
export class Work implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The canonical title of the work, expressed in the language it was
   * originally written.
   */
  title: string;

  /**
   * The type of work.
   */
  work: WorkType;

  /**
   * The language a work is written in. The possible values are taken from the
   * [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) standard.
   */
  language?: string;

  /**
   * The script used to write the work. The possible values are taken from the
   * [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924) standard.
   */
  script?: string;

  /**
   * The [International Standard Musical Work
   * Code](https://musicbrainz.org/doc/ISWC) assigned to the work by copyright
   * collecting agencies.
   */
  iswcs: string[];

  /**
   * The URLs linked to this release.
   */
  urls: URI[];
}
