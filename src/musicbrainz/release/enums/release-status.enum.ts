import {registerEnumType} from '@nestjs/graphql';

/**
 * The status describes how "official" a release is.
 */
export enum ReleaseStatus {
  /**
   * Any release officially sanctioned by the artist and/or their record
   * company. Most releases will fit into this category.
   */
  Official = 1,

  /**
   * A give-away release or a release intended to promote an upcoming official
   * release (e.g. pre-release versions, releases included with a magazine,
   * versions supplied to radio DJs for air-play).
   */
  Promotion,

  /**
   * An unofficial/underground release that was not sanctioned by the artist
   * and/or the record company. This includes unofficial live recordings and
   * pirated releases.
   */
  Bootlet,

  /**
   * An alternate version of a release where the titles have been changed.
   * These don't correspond to any real release and should be linked to the
   * original release using the [transl(iter)ation
   * relationship](https://musicbrainz.org/relationship/fc399d47-23a7-4c28-bfcf-0607a562b644).
   */
  PseudoRelease,
}

registerEnumType(ReleaseStatus, {name: 'ReleaseStatus'});
