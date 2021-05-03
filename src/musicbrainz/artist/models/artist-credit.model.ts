import {ObjectType} from '@nestjs/graphql';
import {Artist} from './artist.model';

/**
 * Artist credits indicate who is the main credited artist (or artists) for
 * releases, release groups, tracks and recordings, and how they are credited.
 * They consist of artists, with (optionally) their names as credited in the
 * specific release, track, etc., and join phrases between them.
 */
@ObjectType()
export class ArtistCredit {
  /**
   * The credited name of the artist.
   */
  name?: string;

  /**
   * A phrase joining the credited name of two or more artists.
   */
  joinphrase?: string;

  /**
   * The artist credited.
   */
  artist: Artist;
}
