import {Module} from '@nestjs/common';
import {AcoustidModule} from './acoustid/acoustid.module';
import {AppResolver} from './app.resolver';
import {CoreModule} from './core/core.module';
import {CoverartarchiveModule} from './coverartarchive/coverartarchive.module';
import {MusicbrainzModule} from './musicbrainz/musicbrainz.module';

@Module({
  imports: [
    CoreModule,
    MusicbrainzModule,
    CoverartarchiveModule,
    AcoustidModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
