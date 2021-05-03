import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {Duration} from '../../../core/scalars/duration.scalar';
import {ID} from '../../../core/scalars/id.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {ArtistCredit} from '../../artist/models/artist-credit.model';
import {Release} from '../../release/models/release.model';

/**
 * A recording is an entity in MusicBrainz which can be linked to
 * [tracks](https://musicbrainz.org/doc/Track) on
 * [releases](https://musicbrainz.org/doc/Release). Each track must always be
 * associated with a single recording, but a recording can be linked to any
 * number of tracks.
 *
 * A recording represents distinct audio that has been used to produce at least
 * one released track through copying or
 * [mastering](https://musicbrainz.org/doc/Mix_Terminology#mastering). A
 * recording itself is never produced solely through copying or mastering.
 *
 * Generally, the audio represented by a recording corresponds to the audio at
 * a stage in the production process before any final mastering but after any
 * editing or [mixing](https://musicbrainz.org/doc/Mix_Terminology#mixing).
 */
@ObjectType({implements: () => [Node]})
export class Recording implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The title of the recording.
   */
  title: string;

  /**
   * The artist(s) that the recording is primarily credited to.
   */
  credits: ArtistCredit[];

  /**
   * The length of the recording. It's only entered manually for [standalone
   * recordings](https://musicbrainz.org/doc/Standalone_Recording). For
   * recordings that are being used on releases, the recording length is the
   * median length of all tracks (that have a track length) associated with
   * that recording. If there is an even number of track lengths, the smaller
   * median candidate is used.
   */
  length: Duration;

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;

  /**
   * The [International Standard Recording
   * Code](https://musicbrainz.org/doc/ISRC) assigned to the recording.
   */
  isrcs: string[];

  /**
   * The URLs linked to this recording.
   */
  urls: URI[];

  /**
   * The releases an recording appears in.
   */
  releases: Release[];
}
