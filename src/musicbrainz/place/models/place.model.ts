import {Field, ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {Interval} from '../../../core/scalars/interval.scalar';
import {Area} from '../../area/models/area.model';
import {PlaceType} from '../enums/place-type.enum';

/**
 * A place is a building or outdoor area used for performing or producing
 * music.
 */
@ObjectType({implements: () => [Node]})
export class Place implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  @Field(() => ID)
  id: string;

  /**
   * The place name is the official name of a place.
   */
  name: string;

  /**
   * The type categorises the place based on its primary function.
   */
  type?: PlaceType;

  /**
   * The address describes the location of the place using the standard
   * addressing format for the country it is located in.
   */
  address: string;

  /**
   * The latitude and longitude describe the location of the place using
   * [geographic
   * coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system).
   */
  coordinates: string;

  /**
   * The area links to the area, such as the city, in which the place is
   * located.
   */
  area: Area;

  /**
   * The begin and end dates indicate when a place was founded and closed down.
   */
  lifeSpan: Interval;

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;
}
