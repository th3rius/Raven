import {Module} from '@nestjs/common';
import {AppResolver} from './app.resolver';
import {CoreModule} from './core/core.module';
import {MusicbrainzModule} from './musicbrainz/musicbrainz.module';

@Module({
  imports: [CoreModule, MusicbrainzModule],
  providers: [AppResolver],
})
export class AppModule {}
