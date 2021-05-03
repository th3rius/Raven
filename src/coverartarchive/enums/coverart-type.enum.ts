import {registerEnumType} from '@nestjs/graphql';

/**
 * The cover art type of an image indicates what part(s) of the release it
 * includes. In most cases cover art belongs to one type, but it can also belong
 * to multiple types (e.g. 'back' and 'spine' in the case of the back image of a
 * CD that also has the sides/spine of the CD package).
 */
export enum CoverartType {
  /**
   * The album cover, this is the front of the packaging of an audio recording
   * (or in the case of a digital release the image associated with it in a
   * digital media store). The front of a CD release is often the front part of
   * the booklet.
   */
  Front = 1,

  /**
   * The back of the package of an audio recording, this will often contain the
   * track listing, barcode and copyright information. The back image is usually
   * not the same as the back of the booklet.
   */
  Back,

  /**
   * A small book or group of pages inserted into the compact disc or DVD jewel
   * case or the equivalent packaging for vinyl records and cassettes. Digital
   * releases sometimes include a booklet in a digital file (usually PDF).
   * Booklets often contain [liner
   * notes](https://en.wikipedia.org/wiki/Liner_notes), song lyrics and/or
   * photographs of the artist or band.
   */
  Booklet,

  /**
   * The medium contains the audio recording. For a compact disc release it is
   * the compact disc itself, for a vinyl release it is the vinyl disc itself,
   * etc.
   */
  Medium,

  /**
   * An obi is a strip of paper around the spine (or occasionally one of the
   * other edges of the packaging).
   */
  Obi,

  /**
   * A spine is the edge of the package of an audio recording, it is often the
   * only part visible when recordings are stacked or stored in a shelf. For
   * compact discs the spine is usually part of the back cover scan, and should
   * not be uploaded separately.
   */
  Spine,

  /**
   * Digital releases sometimes have cover art associated with each individual
   * track of a release (typically embedded in the .mp3 files), use this type
   * for images associated with individual tracks.
   */
  Track,

  /**
   * Anything which doesn't fit in the other types.
   */
  Other,

  /**
   * The image behind or on the tray containing the medium. For jewel cases,
   * this is usually printed on the other side of the piece of paper with the
   * back (and spine) image.
   */
  Tray,

  /**
   * A sticker is an adhesive piece of paper, that is attached to the plastic
   * film or enclosed inside the packaging.
   */
  Sticker,

  /**
   *  A poster included with a release. May be the same size as the packaging or
   *  larger (in this case it would fold out). Such posters are often printed on
   *  the back of a fold-out booklet but are sometimes bundled separately.
   */
  Poster,

  /**
   * A liner is a protective sleeve surrounding a medium (usually a vinyl
   * record, but sometimes a CD), often printed with notes or images.
   */
  Liner,

  /**
   * A watermark is a piece of text or an image which is not part of the cover
   * art but is added by the person who scanned the cover art. Images without
   * any watermarks are preferred where possible - this type is useful in cases
   * where either the only available image is watermarked, or where a better
   * quality watermarked image is uploaded alongside a poorer quality
   * non-watermarked image.
   */
  Watermark,

  /**
   * Select this type when uploading images that are usable for reference, but
   * need more work to be usable for tagging.
   */
  RawUnedited,
}

registerEnumType(CoverartType, {name: 'CoverartType'});
