import {Args, Query, Resolver} from '@nestjs/graphql';
import {PaginationPipe} from '../../core/pipes/pagination.pipe';
import {connectionFromArray} from '../../core/utils/connection-from-array';
import {ReleaseArgs} from './dto/release.args';
import {ReleasesArgs} from './dto/releases.args';
import {ReleaseConnection} from './models/release-connection.model';
import {Release} from './models/release.model';
import {ReleaseService} from './release.service';

@Resolver()
export class ReleaseResolver {
  constructor(private releaseService: ReleaseService) {}

  /**
   * Musicbrainz Release.
   */
  @Query(() => Release)
  release(@Args() args: ReleaseArgs) {
    return this.releaseService.findById(args.id);
  }

  /**
   * Musicbrainz Releases.
   */
  @Query(() => ReleaseConnection)
  async releases(@Args(PaginationPipe) args: ReleasesArgs) {
    const {total, releases} = await this.releaseService.findMany(args);
    return connectionFromArray(releases, args, total);
  }
}
