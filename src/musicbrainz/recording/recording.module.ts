import {Module} from '@nestjs/common';
import {RecordingResolver} from './recording.resolver';

@Module({
  providers: [RecordingResolver],
})
export class RecordingModule {}
