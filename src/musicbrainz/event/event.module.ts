import {Module} from '@nestjs/common';
import {EventResolver} from './event.resolver';

@Module({
  providers: [EventResolver],
})
export class EventModule {}
