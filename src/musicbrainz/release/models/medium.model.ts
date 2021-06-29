import {ObjectType} from '@nestjs/graphql';
import {Track} from './track.model';

/**
 * In [MusicBrainz
 * terminology](https://musicbrainz.org/doc/MusicBrainz_Terminology), a
 * prototypical medium is one of the physical, separate things you would get
 * when you buy something in a record store. They are the individual CDs,
 * vinyls, etc. contained within the packaging of an album (or any other type of
 * release). Mediums are always included in a release, and have a position in
 * said release (e.g. disc 1 or disc 2). They have a format, like CD, 12" vinyl
 * or cassette (in some cases this will be unknown), and can have an optional
 * title (e.g. disc 2: The Early Years).
 *
 * Note that a side of a disc, like side A of a vinyl, is not its own medium;
 * the whole vinyl disc is. Digital (as opposed to physical) releases don't have
 * "real" mediums, but they should be entered as several mediums if they are
 * officially divided in several "discs". Exceptions in the treatment of mediums
 * can exist: DualDiscs are usually entered as two mediums if the tracklist is
 * the same on both sides, but with different mixes.
 *
 * [Disc IDs](https://musicbrainz.org/doc/Disc_ID) are linked to mediums.
 */
@ObjectType()
export class Medium {
  /**
   * The title of this particular medium.
   */
  title: string;

  /**
   * The [format](https://musicbrainz.org/doc/Release/Format) of the medium.
   */
  format?: string;

  /**
   * Tracklists represent the set and ordering of
   * [tracks](https://musicbrainz.org/doc/Track) as listed on a liner, the same
   * tracklist can appear on more than one release. For example, a boxset
   * compilation that contains previously released CDs would share the same
   * tracklists as the separate releases.
   */
  tracklist: Track[];
}
