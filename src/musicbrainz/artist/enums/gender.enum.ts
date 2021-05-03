import {registerEnumType} from '@nestjs/graphql';

/**
 * The gender is used to explicitly state whether a person or character
 * identifies as male, female or neither. Groups do not have genders.
 */
export enum Gender {
  Male = 1,

  Female,

  Other,

  /**
   * For cases where gender just doesn't apply at all (like companies entered
   * as artists)
   */
  NotApplicable,
}

registerEnumType(Gender, {name: 'Gender'});
