import {ArgsType} from '@nestjs/graphql';

@ArgsType()
export class LookupByFingerprintArgs {
  /**
   * An [AcoustID](https://acoustid.org/) string encoded fingerprint.
   */
  fingerprint: string;
}
