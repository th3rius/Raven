import {ObjectType} from '@nestjs/graphql';
import {Node} from '../../../core/interfaces/node.interface';
import {Date} from '../../../core/scalars/date.scalar';
import {ID} from '../../../core/scalars/id.scalar';
import {URI} from '../../../core/scalars/uri.scalar';
import {Coverart} from '../../../coverartarchive/models/coverart.model';
import {Area} from '../../area/models/area.model';
import {ArtistCredit} from '../../artist/models/artist-credit.model';
import {Label} from '../../label/models/label.model';
import {ReleaseGroup} from '../../release-group/models/release-group.model';
import {ReleasePackaging} from '../enums/release-packaging.enum';
import {ReleaseStatus} from '../enums/release-status.enum';
import {Medium} from './medium.model';

/**
 * A MusicBrainz release represents the unique release (i.e. issuing) of a
 * product on a specific date with specific release information such as the
 * country, label, barcode and packaging. If you walk into a store and purchase
 * an album or single, they are each represented in MusicBrainz as one release.
 *
 * Each release belongs to a [release
 * group](https://musicbrainz.org/doc/Release_Group) and contains at least one
 * [medium](https://musicbrainz.org/doc/Medium) (commonly referred to as a disc
 * when talking about a CD release). Each medium has a tracklist.
 */
@ObjectType({implements: () => [Node]})
export class Release implements Node {
  /**
   * See the [page about
   * MBIDs](https://musicbrainz.org/doc/MusicBrainz_Identifier) for more
   * information.
   */
  id: ID;

  /**
   * The title of the release.
   */
  title: string;

  /**
   * The status describes how "official" a release is.
   */
  status?: ReleaseStatus;

  /**
   * See the [page about
   * comments](https://musicbrainz.org/doc/Disambiguation_Comment) for more
   * information.
   */
  disambiguation: string;

  /**
   * The physical packaging that accompanies the release. See the [list of
   * packaging](https://musicbrainz.org/doc/Release/Packaging) for more
   * information.
   */
  packaging?: ReleasePackaging;

  /**
   * The language a release's track list is written in. The possible values are
   * taken from the [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3)
   * standard.
   */
  language?: string;

  /**
   * The script used to write the release's track list. The possible values are
   * taken from the [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924)
   * standard.
   */
  script?: string;

  /**
   * The artist(s) that the release is primarily credited to, as [credited on
   * the release](https://musicbrainz.org/doc/Artist_Credit).
   */
  credits: ArtistCredit[];

  /**
   * The group this release belongs to.
   */
  releaseGroup?: ReleaseGroup;

  /**
   * The country the release was issued in.
   */
  area?: Area;

  /**
   * The date the release was issued.
   */
  date?: Date;

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

  /**
   * The [barcode](https://musicbrainz.org/doc/barcode), if the release has
   * one. The most common types found on releases are 12-digit
   * [UPCs](https://en.wikipedia.org/wiki/Universal_Product_Code) and 13-digit
   * [EANs](https://en.wikipedia.org/wiki/European_Article_Number).
   */
  barcode?: string;

  /**
   * Most releases that aren't self-released have a quasi-unique catalog
   * number, assigned to them by the record label releasing them. Generally,
   * this number will include alphanumeric characters, often letters followed
   * by numbers, perhaps separated by a dash, space or other punctuation. The
   * catalog number is most often printed on the spine of CDs and on the back
   * of sleeves, often near the barcode if one exists, and can indicate both
   * the format of a release (CD, LP, etc.) and often the label.
   */
  catalogNumber?: string;

  /**
   * The label which issued the release. There may be more than one.
   */
  labels: Label[];

  /**
   * A medium is the actual physical medium that stores the audio content. This
   * means that each CD in a multi-disc release will be entered as separate
   * mediums within the release, and that both sides of a vinyl record or
   * cassette will exist on one medium. Mediums have a format (e.g. CD, DVD,
   * vinyl, and cassette) and can optionally also have a title. Sometimes a
   * medium can be a side of a disc. For example, the two sides of a hybrid
   * SACD (the CD side and the SACD side) should be entered as two mediums.
   */
  media: Medium[];

  /**
   * The URLs linked to this release.
   */
  urls: URI[];

  /**
   * List of genres associated with a release.
   */
  genres: string[];
}
