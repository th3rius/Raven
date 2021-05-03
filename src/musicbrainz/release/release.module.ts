import {Module} from '@nestjs/common';
import {ReleaseResolver} from './release.resolver';

@Module({
  providers: [ReleaseResolver],
})
export class ReleaseModule {}
