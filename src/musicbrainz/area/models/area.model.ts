import {Field, ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {AreaType} from '../enums/area-type.enum';

/**
 * Areas are geographic regions or settlements. Areas are usually kept in sync
 * with their [Wikidata](https://musicbrainz.org/doc/Wikidata) entries.
 */
@ObjectType({implements: () => [Node]})
export class Area implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  @Field(() => ID)
  id: string;

  /**
   * The name of the area.
   */
  name: string;

  /**
   * The type of area.
   */
  type: AreaType;

  /**
   * The [ISO 3166 codes](https://en.wikipedia.org/wiki/ISO_3166) are the codes
   * assigned by ISO to countries and subdivisions.
   */
  iso31661?: string;

  /**
   * The URLs linked to this area.
   */
  urls: URI[];
}
