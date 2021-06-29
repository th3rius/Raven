import {Field, ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {Interval} from '../../../core/scalars/interval.scalar';
import {Time} from '../../../core/scalars/time.scalar';
import {EventType} from '../enums/event-type.enum';

/**
 * An event refers to an organised event which people can attend, and is
 * relevant to MusicBrainz. Generally this means live performances, like
 * concerts and festivals.
 */
@ObjectType({implements: [Node]})
export class Event implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  @Field(() => ID)
  id: string;

  /**
   * The name is the official name of the event if it has one, or a descriptive
   * name (like "Main Artist at Place") if not.
   */
  name: string;

  /**
   * The type describes what kind of event the event is.
   */
  type?: EventType;

  /**
   * The begin and end dates indicate when an event started and finished.
   */
  lifeSpan: Interval;

  /**
   * The time is the start time of the event.
   */
  time: Time;

  /**
   * The setlist stores a list of songs performed, optionally including links
   * to artists and works. See the [setlist
   * documentation](https://musicbrainz.org/doc/Event/Setlist) for syntax and
   * examples.
   */
  setlist: string;

  /**
   * List of genres associated with an event.
   */
  genres: string[];
}
