import {Module} from '@nestjs/common';
import {LabelResolver} from './label.resolver';

@Module({
  providers: [LabelResolver],
})
export class LabelModule {}
