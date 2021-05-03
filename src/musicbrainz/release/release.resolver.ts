import {Args, Query, Resolver} from '@nestjs/graphql';
import {ReleaseArgs} from './dto/release.args';
import {ReleasesArgs} from './dto/releases.args';
import {ReleaseConnection} from './models/release-connection.model';
import {Release} from './models/release.model';

@Resolver()
export class ReleaseResolver {
  /**
   * Musicbrainz Release.
   */
  @Query(() => Release)
  release(@Args() args: ReleaseArgs) {}

  /**
   * Musicbrainz Releases.
   */
  @Query(() => [ReleaseConnection])
  releases(@Args() args: ReleasesArgs) {}
}
