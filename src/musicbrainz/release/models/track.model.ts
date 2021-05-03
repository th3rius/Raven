import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {Duration} from '../../../core/scalars/duration.scalar';
import {ID} from '../../../core/scalars/id.scalar';
import {Recording} from '../../recording/models/recording.model';

/**
 * In MusicBrainz, a track is the way a recording is represented on a
 * particular release (or, more exactly, on a particular medium). Every track
 * has a title (see the guidelines for titles) and is credited to one or more
 * artists. Tracks are additionally assigned MBIDs, though they cannot be the
 * target of Relationships or other properties conventionally available to
 * entities.
 */
@ObjectType({implements: () => [Node]})
export class Track implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The length of the track.
   */
  length?: Duration;

  /**
   * The recording associated with this track.
   */
  recording: Recording;
}
