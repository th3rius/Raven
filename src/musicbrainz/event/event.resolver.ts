import {Args, Query, Resolver} from '@nestjs/graphql';
import {EventArgs} from './dto/event.args';
import {EventsArgs} from './dto/events.args';
import {EventConnection} from './models/event-connection.model';
import {Event} from './models/event.model';

@Resolver()
export class EventResolver {
  /**
   * Musicbrainz Event.
   */
  @Query(() => Event)
  event(@Args() args: EventArgs) {}

  /**
   * Musicbrainz Events.
   */
  @Query(() => [EventConnection])
  events(@Args() args: EventsArgs) {}
}
