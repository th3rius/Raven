import {Args, Query, Resolver} from '@nestjs/graphql';
import {LabelArgs} from './dto/label.args';
import {LabelsArgs} from './dto/labels.args';
import {LabelConnection} from './models/label-connection.model';
import {Label} from './models/label.model';

@Resolver()
export class LabelResolver {
  /**
   * Musicbrainz Label.
   */
  @Query(() => Label)
  label(@Args() args: LabelArgs) {}

  /**
   * Musicbrainz Labels.
   */
  @Query(() => [LabelConnection])
  labels(@Args() args: LabelsArgs) {}
}
