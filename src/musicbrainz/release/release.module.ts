import {Module} from '@nestjs/common';
import {ReleaseResolver} from './release.resolver';
import {ReleaseService} from './release.service';

@Module({
  providers: [ReleaseResolver, ReleaseService],
})
export class ReleaseModule {}
