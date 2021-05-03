import {Args, Query, Resolver} from '@nestjs/graphql';
import {WorkArgs} from './dto/work.args';
import {WorksArgs} from './dto/works.args';
import {WorkConnection} from './models/work-connection.model';
import {Work} from './models/work.model';

@Resolver()
export class WorkResolver {
  /**
   * Musicbrainz Work.
   */
  @Query(() => Work)
  work(@Args() args: WorkArgs) {}

  /**
   * Musicbrainz Works.
   */
  @Query(() => [WorkConnection])
  works(@Args() args: WorksArgs) {}
}
