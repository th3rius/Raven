import {ObjectType} from '@nestjs/graphql';
import {URI} from '../../core/scalars/uri.scalar';
import {CoverartType} from '../enums/coverart-type.enum';
import {Thumbnails} from './thumbnail.model';

/**
 * Cover art, also known as "album art" or "album artwork", is artwork that
 * provides a visual representation of a
 * [release](https://musicbrainz.org/doc/Release). Normally it refers to the
 * front of the release packaging, but the [Cover Art
 * Archive](https://musicbrainz.org/doc/Cover_Art_Archive) can store images of
 * the back of the release packing, of the media itself, and of many other
 * pieces — right down to the sticker on the shrinkwrap.
 */
@ObjectType()
export class Coverart {
  /**
   * The full coverartarchive.org url to the original image.
   */
  image: URI;

  /**
   * The cover art type of an image indicates what part(s) of the release it
   * includes. In most cases cover art belongs to one type, but it can also
   * belong to multiple types (e.g. 'back' and 'spine' in the case of the back
   * image of a CD that also has the sides/spine of the CD package).
   */
  types: CoverartType[];

  /**
   * A free text comment.
   */
  comment?: string;

  /**
   * Object containing the keys "250", "500", and "1200" linking to thumbnails
   * of those sizes (in pixels); "small" and "large" are deprecated keys and are
   * equivalent to "250" and "500", respectively.
   */
  // thumbnails: Thumbnails;
}
