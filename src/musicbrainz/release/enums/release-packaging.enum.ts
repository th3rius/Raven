import {registerEnumType} from '@nestjs/graphql';

/**
 * The physical packaging that accompanies the release. See the [list of
 * packaging](https://musicbrainz.org/doc/Release/Packaging) for more
 * information.
 */
export enum ReleasePackaging {
  /**
   * The traditional CD case, made of hard, brittle plastic.
   */
  JewelCase = 1,

  /**
   * A thinner jewel case, commonly used for CD singles.
   */
  SlimJewelCase,

  /**
   * A folded case, typically made of coated paperboard, with one or more
   * plastic trays glued into it. Cases that can only be folded in half usually
   * have only one plastic tray glued to it, while those that can be folded
   * into thirds or more folds usually have multiple plastic trays glued to it.
   */
  Digipak,

  /**
   * A sleeve made of paper, paperboard, or cardboard. Traditional packaging
   * for records, also seen with CDs.
   */
  CardboardPaperSleeve,

  /**
   * Other forms of packaging not on the list.
   */
  Other,

  /**
   * The traditional DVD case, made of soft plastic (usually) dark grey with a
   * thin transparent plastic cover protecting the artwork.
   */
  KeepCase,

  /**
   * No packaging at all. Common for digital media (downloads).
   */
  None,

  /**
   * Regular plastic case for a cassette.
   */
  CassetteCase,

  /**
   * A book with a sleeve containing a medium (usually a CD).
   */
  Book,

  /**
   * A double-sided, double-width jewel case normally holding 2 to 4 CDs, but
   * (with Smart Tray or Brilliant Box inside) capable of up to 6 CDs.
   */
  Fatbox,

  /**
   * A digipak-like case held together with a "snapping" plastic closure.
   */
  SnapCase,

  /**
   * A cardboard sleeve that folds in halves, thirds, etc. It can hold multiple
   * records or CDs as well as booklets, posters and other memorabilia.
   */
  GatefoldCover,

  /**
   * A pouch-like package with an internal mechanism that pushes the contents
   * (usually a CD) out of the case when the lid flap is opened.
   */
  DiscboxSlider,

  /**
   * Packaging similar to the regular jewel case, but with rounded corners and
   * a latch closing mechanism. Usually used for SACDs.
   */
  SuperJewelBox,

  /**
   * A bounded booklet usually in hardcover with a sleeve bound to the spine of
   * the book that houses a CD.
   */
  Digibook,

  /**
   * A sleeve made entirely of plastic that holds the medium and other parts of
   * an album (e.g. liner notes and track list). The plastic sleeve is usually
   * transparent. For paper sleeves that have a plastic part that shows the
   * medium, please use "Cardboard/Paper Sleeve".
   */
  PlasticSleeve,

  /**
   * A box with a lid or an opening that contains the medium and other
   * packaging, like posters and booklet containing lyrics.
   */
  Box,

  /**
   * A box with openings at its two ends that contains a tray (usually plastic)
   * holding the medium. The box usually has a cutout to help the user to pull
   * out the tray.
   */
  Slidepack,
}

registerEnumType(ReleasePackaging, {name: 'ReleasePackaging'});
