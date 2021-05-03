import {registerEnumType} from '@nestjs/graphql';

/**
 * The type describes what kind of event the event is.
 */
export enum EventType {
  /**
   * An individual concert by a single artist or collaboration, often with
   * supporting artists who perform before the main act.
   */
  Concert = 1,

  /**
   * An event where a number of different acts perform across the course of the
   * day. Larger festivals may be spread across multiple days.
   */
  Festival,

  /**
   * A party, reception or other event held specifically for the launch of a
   * release.
   */
  LaunchEvent,

  /**
   * A convention, expo or trade fair is an event which is not typically
   * orientated around music performances, but can include them as side
   * activities.
   */
  ConventionExpo,

  /**
   * A masterclass or clinic is an event where an artist meets with a small to
   * medium-sized audience and instructs them individually and/or takes
   * questions intended to improve the audience members' playing skills.
   */
  MasterclassClinic,

  /**
   * A performance of one or more plays, musicals, operas, ballets or other
   * similar works for the stage in their staged form (as opposed to a [concert
   * performance](https://en.wikipedia.org/wiki/Concert_performance) without
   * staging).
   */
  StagePerformance,
}

registerEnumType(EventType, {name: 'EventType'});
