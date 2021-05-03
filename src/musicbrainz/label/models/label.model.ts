import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {Interval} from '../../../core/scalars/interval.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {Area} from '../../area/models/area.model';
import {LabelType} from '../enums/label-type.enum';

/**
 * Labels are one of the most complicated and controversial parts of the music
 * industry. The main reason for that being that the term itself is not clearly
 * defined and refers to at least two overlapping concepts: imprints, and the
 * companies that control them. Fortunately, in many cases the imprint and the
 * company controlling it have the same name.
 */
@ObjectType({implements: () => [Node]})
export class Label implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The official name of the label.
   */
  name: string;

  /**
   * The type describes the main activity of the label.
   */
  type?: LabelType;

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;

  /**
   * The begin and end dates indicate when an label started and finished.
   */
  lifeSpan: Interval;

  /**
   * The label code is the "LC" code of the label.
   */
  code: string;

  /**
   * The International Standard Name Identifier for the label. See
   * [ISNI](https://musicbrainz.org/doc/ISNI) for more information.
   */
  isni?: string;

  /**
   * The [area of origin](https://musicbrainz.org/doc/Label/Country) for the
   * label.
   */
  area: Area;

  /**
   * The URLs linked to this label.
   */
  urls: URI[];
}
