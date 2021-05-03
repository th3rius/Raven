import {Args, Query, Resolver} from '@nestjs/graphql';
import {ReleaseGroupArgs} from './dto/release-group.args';
import {ReleaseGroupsArgs} from './dto/release-groups.args';
import {ReleaseGroupConnection} from './models/release-group-connection.model';
import {ReleaseGroup} from './models/release-group.model';

@Resolver()
export class ReleaseGroupResolver {
  /**
   * Musicbrainz Release Group.
   */
  @Query(() => ReleaseGroup)
  releaseGroup(@Args() args: ReleaseGroupArgs) {}

  /**
   * Musicbrainz Release Groups.
   */
  @Query(() => [ReleaseGroupConnection])
  releaseGroups(@Args() args: ReleaseGroupsArgs) {}
}
