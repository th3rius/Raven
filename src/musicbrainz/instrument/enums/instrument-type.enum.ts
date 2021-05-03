import {registerEnumType} from '@nestjs/graphql';

/**
 * The type categorises the instrument by the way the sound is created, similar
 * to the [Hornbostel-Sachs](https://en.wikipedia.org/wiki/Hornbostel-Sachs)
 * classification.
 */
export enum InstrumentType {
  /**
   * An [aerophone](https://en.wikipedia.org/wiki/Aerophone), i.e. an
   * instrument where the sound is created by vibrating air. The instrument
   * itself does not vibrate.
   */
  WindInstrument = 1,

  /**
   * A [chordophone](https://en.wikipedia.org/wiki/Idiophone), i.e. an
   * instrument where the sound is created by the vibration of strings.
   */
  StringInstrument,

  /**
   * An [idiophone](https://en.wikipedia.org/wiki/Idiophone), i.e. an
   * instrument where the sound is produced by the body of the instrument
   * vibrating, or a drum (most
   * [membranophones](https://en.wikipedia.org/wiki/Membranophone)) where the
   * sound is produced by a stretched membrane which is struck or rubbed.
   */
  PercussionInstrument,

  /**
   * An [electrophone](https://en.wikipedia.org/wiki/Electrophone), i.e. an
   * instrument where the sound is created with electricity.
   */
  ElectronicInstrument,

  /**
   * An instrument which doesn't fit in the other categories.
   */
  OtherInstrument,

  /**
   * A standard grouping of instruments often played together, like a string
   * quartet.
   */
  Ensemble,

  /**
   * A grouping of related but different instruments, like the different
   * violin-like instruments.
   */
  Family,
}

registerEnumType(InstrumentType, {name: 'InstrumentType'});
