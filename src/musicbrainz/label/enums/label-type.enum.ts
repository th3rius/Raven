import {registerEnumType} from '@nestjs/graphql';

/**
 * This field describes what it the main activity of a Label.
 */
export enum LabelType {
  /**
   * Used for companies mainly distributing other labels production, often in a
   * specific region of the world.
   */
  Distributor = 1,

  /**
   * Used for holdings, conglomerates or other financial entities whose main
   * activity is not to produce records, but to manage a large set of recording
   * labels owned by them.
   */
  Holding,

  Production,

  /**
   * Used for labels producing entirely new releases.
   */
  OriginalProduction,

  /**
   * Used for known bootlegs labels (as in "not sanctioned by the rights
   * owner(s) of the released work").
   */
  BootlegProduction,

  /**
   * Used for labels specializing in catalog reissues.
   */
  ReissueProduction,

  Publisher,

  /**
   * A rights society is an organization which collects royalties on behalf of
   * the artists. This type is designed to be used with the rights society
   * relationship type rather than as a normal release label.
   */
  RightsSociety,

  /**
   * Used where the label is just a logo (usually either created by a company
   * for a specific product line, or where a former company’s logo is still
   * used on releases after the company was closed or purchased, or both).
   */
  Imprint,

  Manufacturer,
}

registerEnumType(LabelType, {name: 'LabelType'});
