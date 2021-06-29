import {Args, Query, Resolver} from '@nestjs/graphql';
import {ArtistArgs} from './dto/artist.args';
import {ArtistsArgs} from './dto/artists.args';
import {ArtistConnection} from './models/artist-connection.model';
import {Artist} from './models/artist.model';

@Resolver()
export class ArtistResolver {
  /**
   * Musicbrainz Artist.
   */
  @Query(() => Artist)
  artist(@Args() args: ArtistArgs) {}

  /**
   * Musicbrainz Artists.
   */
  @Query(() => ArtistConnection)
  artists(@Args() args: ArtistsArgs) {}
}
