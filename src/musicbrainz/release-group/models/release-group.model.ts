import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {ID} from '../../../core/scalars/id.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {Coverart} from '../../../coverartarchive/models/coverart.model';
import {ArtistCredit} from '../../artist/models/artist-credit.model';
import {Release} from '../../release/models/release.model';
import {ReleaseGroupPrimaryType} from '../enums/release-group-primary-type.enum';
import {ReleaseGroupSecondaryType} from '../enums/release-group-secondary-type.enum';

/**
 * A **release group**, just as the name suggests, is used to group several
 * different [releases](https://musicbrainz.org/doc/Release) into a single
 * logical entity. Every release belongs to one, and only one release group.
 *
 * Both release groups and releases are "albums" in a general sense, but with
 * an important difference: a release is something you can buy as media such as
 * a CD or a vinyl record, while a release group embraces the overall concept
 * of an album — it doesn't matter how many CDs or editions/versions it had.
 *
 * When an artist says "We've released our new album", they're talking about a
 * release group. When their publisher says "This new album gets released next
 * week in Japan and next month in Europe", they're referring to the different
 * releases that belong in the above mentioned release group.
 *
 * MusicBrainz automatically considers every release in the database to be part
 * of a release group, even if this group only contains the one release. When a
 * brand new release is added to the database, a new release group is
 * automatically added as well.
 */
@ObjectType({implements: () => [Node]})
export class ReleaseGroup implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The title of a release group is usually very similar, if not the same, as
   * the titles of the releases contained within it.
   */
  title: string;

  /**
   * The primary type of a release group.
   */
  primaryType?: ReleaseGroupPrimaryType;

  /**
   * The secondary type of a release group.
   */
  secondaryType?: ReleaseGroupSecondaryType;

  /**
   * The artist of a release group is usually very similar, if not the same, as
   * the artist of the releases contained within it. Multiple artists can be
   * linked using [artist credits](https://musicbrainz.org/doc/Artist_Credit).
   */
  credits: ArtistCredit[];

  /**
   * The releases that belongs to this group.
   */
  releases: Release[];

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;

  /**
   * The URLs linked to this release.
   */
  urls: URI[];

  /**
   * Cover art, also known as "album art" or "album artwork", is artwork that
   * provides a visual representation of a
   * [release](https://musicbrainz.org/doc/Release). Normally it refers to the
   * front of the release packaging, but the [Cover Art
   * Archive](https://musicbrainz.org/doc/Cover_Art_Archive) can store images of
   * the back of the release packing, of the media itself, and of many other
   * pieces — right down to the sticker on the shrinkwrap.
   */
  coverart: Coverart[];
}
