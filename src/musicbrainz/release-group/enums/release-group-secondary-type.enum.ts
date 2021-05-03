import {registerEnumType} from '@nestjs/graphql';

/**
 * The type describes what kind of releases the release group represents, for
 * example album, single, soundtrack, compilation etc.
 *
 * See the [Type](https://musicbrainz.org/doc/Release_Group/Type) subpage for a
 * full list of release group types.
 */
export enum ReleaseGroupSecondaryType {
  /**
   * A compilation, for the purposes of the MusicBrainz database, covers the
   * following types of releases:
   *
   * - a collection of recordings from various old sources (not necessarily
   * released) combined together. For example a "best of", retrospective or
   * rarities type release.
   * - a various artists song collection, usually based on a general theme
   * ("Songs for Lovers"), a particular time period ("Hits of 1998"), or some
   * other kind of grouping ("Songs From the Movies", the "Café del Mar"
   * series, etc).
   *
   * The MusicBrainz project does not generally consider the following to be
   * compilations:
   *
   * - a reissue of an album, even if it includes bonus tracks.
   * - a tribute release containing covers of music by another artist.
   * - a classical release containing new recordings of works by a classical
   * artist.
   * - a split release containing new music by several artists
   *
   *  Compilation should be used in addition to, not instead of, other types:
   *  for example, a various artists soundtrack using pre-released music should
   *  be marked as both a soundtrack and a compilation. As a general rule,
   *  always select every secondary type that applies.
   */
  Compilation = 1,

  /**
   * A soundtrack is the musical score to a movie, TV series, stage show, video
   * game, or other medium. Video game CDs with audio tracks should be
   * classified as soundtracks because the musical properties of the CDs are
   * more interesting to [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz)
   * than their data properties.
   */
  Soundtrack,

  /**
   * Non-music spoken word releases.
   */
  Spokenword,

  /**
   * An interview release contains an interview, generally with an artist.
   */
  Interview,

  /**
   * An audiobook is a book read by a narrator without music.
   */
  Audiobook,

  /**
   * A release that was recorded live.
   */
  Live,

  /**
   * A release that primarily contains remixed material.
   */
  Remix,

  /**
   * A DJ-mix is a sequence of several recordings played one after the other,
   * each one modified so that they blend together into a continuous flow of
   * music. A DJ mix release requires that the recordings be modified in some
   * manner, and the DJ who does this modification is usually (although not
   * always) credited in a fairly prominent way.
   */
  DJMix,

  /**
   * Promotional in nature (but not necessarily free), mixtapes and street
   * albums are often released by artists to promote new artists, or upcoming
   * studio albums by prominent artists. They are also sometimes used to keep
   * fans' attention between studio releases and are most common in rap & hip
   * hop genres. They are often not sanctioned by the artist's label, may lack
   * proper sample or song clearances and vary widely in production and
   * recording quality. While mixtapes are generally DJ-mixed, they are
   * distinct from commercial DJ mixes (which are usually deemed compilations)
   * and are defined by having a significant proportion of new material,
   * including original production or original vocals over top of other
   * artists' instrumentals. They are distinct from demos in that they are
   * designed for release directly to the public and fans; not to labels.
   */
  MixtapeStreet,

  /**
   * A demo is a song or group of songs typically recorded for limited
   * circulation or for reference use, rather than for general public release.
   */
  Demo,

  /**
   * Radio drama is a dramatized, purely acoustic performance. With no visual
   * component, radio drama depends on dialogue, music and sound effects to
   * help the listener imagine the characters and story: "It is auditory in the
   * physical dimension but equally powerful as a visual force in the
   * psychological dimension."
   */
  AudioDrama,
}

registerEnumType(ReleaseGroupSecondaryType, {
  name: 'ReleaseGroupSecondaryType',
});
