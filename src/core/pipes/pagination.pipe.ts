import {BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class PaginationPipe implements PipeTransform {
  transform(value: {first?: number; last?: number}) {
    if (value.first === null && value.last === null) {
      throw new BadRequestException(
        'You must provide a `first` or `last` value to properly paginate the connection.'
      );
    }
    if (value.first && value.last) {
      throw new BadRequestException(
        'Passing both `first` and `last` to paginate the connection is not supported.'
      );
    }
    return value;
  }
}
