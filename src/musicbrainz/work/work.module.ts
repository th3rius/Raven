import {Module} from '@nestjs/common';
import {WorkResolver} from './work.resolver';

@Module({
  providers: [WorkResolver],
})
export class WorkModule {}
