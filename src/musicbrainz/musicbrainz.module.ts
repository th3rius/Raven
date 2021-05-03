import {Module} from '@nestjs/common';
import {AreaModule} from './area/area.module';
import {ArtistModule} from './artist/artist.module';
import {EventModule} from './event/event.module';
import {InstrumentModule} from './instrument/instrument.module';
import {LabelModule} from './label/label.module';
import {PlaceModule} from './place/place.module';
import {RecordingModule} from './recording/recording.module';
import {ReleaseGroupModule} from './release-group/release-group.module';
import {ReleaseModule} from './release/release.module';
import {WorkModule} from './work/work.module';

@Module({
  imports: [
    ReleaseModule,
    ArtistModule,
    AreaModule,
    LabelModule,
    RecordingModule,
    ReleaseGroupModule,
    EventModule,
    WorkModule,
    PlaceModule,
    InstrumentModule,
  ],
})
export class MusicbrainzModule {}
