import {registerEnumType} from '@nestjs/graphql';

/**
 * The type describes what kind of releases the release group represents, for
 * example album, single, soundtrack, compilation etc.
 *
 * See the [Type](https://musicbrainz.org/doc/Release_Group/Type) subpage for a
 * full list of release group types.
 */
export enum ReleaseGroupPrimaryType {
  /**
   * An album, perhaps better defined as a "Long Play" (LP) release, generally
   * consists of previously unreleased material (unless this type is combined
   * with secondary types which change that, such as "Compilation").
   */
  Album = 1,

  /**
   * A single has different definitions depending on the market it is released
   * for.
   *
   * - In the **US market**, a single typically has one main song and possibly
   * a handful of additional tracks or remixes of the main track; the single is
   * usually named after its main song; the single is primarily released to get
   * radio play and to promote release sales.
   * - The **U.K. market** (also Australia and Europe) is similar to the US
   * market, however singles are often released as a two disc set, with each
   * disc sold separately. They also sometimes have a longer version of the
   * single (often combining the tracks from the two disc version) which is
   * very similar to the US style single, and this is referred to as a
   * "maxi-single". (In some cases the maxi-single is longer than the release
   * the single comes from!)
   * - The **Japanese market** is much more single driven. The defining factor
   * is typically the length of the single and the price it is sold at. Up
   * until 1995 it was common that these singles would be released using a
   * mini-cd format, which is basically a much smaller CD typically 8 cm in
   * diameter. Around 1995 the 8cm single was phased out, and the standard 12cm
   * CD single is more common now; generally re-releases of singles from
   * pre-1995 will be released on the 12cm format, even if they were originally
   * released on the 8cm format. Japanese singles often come with instrumental
   * versions of the songs and also have maxi-singles like the UK with remixed
   * versions of the songs. Sometimes a maxi-single will have more tracks than
   * an EP but as it's all alternate versions of the same 2-3 songs it is still
   * classified as a single.
   *
   * There are other variations of the single called a "split single" where
   * songs by two different artists are released on the one disc, typically
   * vinyl. The term "B-Side" comes from the era when singles were released on
   * 7 inch (or sometimes 12 inch) vinyl with a song on each side, and so side
   * A is the track that the single is named for, and the other side - side B -
   * would contain a bonus song, or sometimes even the same song.
   */
  Single,

  /**
   * An EP is a so-called "Extended Play" release and often contains the
   * letters EP in the title. Generally an EP will be shorter than a full
   * length release (an LP or "Long Play") and the tracks are usually exclusive
   * to the EP, in other words the tracks don't come from a previously issued
   * release. EP is fairly difficult to define; usually it should only be
   * assumed that a release is an EP if the artist defines it as such.
   */
  EP,

  /**
   * Any release that does not fit or can't decisively be placed in any of the
   * other categories.
   */
  Other,

  /**
   * An episodic release that was originally broadcast via radio, television,
   * or the Internet, including podcasts.
   */
  broadcast,
}

registerEnumType(ReleaseGroupPrimaryType, {name: 'ReleaseGroupPrimaryType'});
