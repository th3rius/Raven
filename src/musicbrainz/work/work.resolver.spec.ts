import {Test, TestingModule} from '@nestjs/testing';
import {WorkResolver} from './work.resolver';

describe('WorkResolver', () => {
  let resolver: WorkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkResolver],
    }).compile();

    resolver = module.get < WorkResolver > WorkResolver;
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
