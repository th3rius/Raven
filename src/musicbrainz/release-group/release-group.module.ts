import {Module} from '@nestjs/common';
import {ReleaseGroupResolver} from './release-group.resolver';

@Module({
  providers: [ReleaseGroupResolver],
})
export class ReleaseGroupModule {}
