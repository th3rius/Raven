import {Test, TestingModule} from '@nestjs/testing';
import {LabelResolver} from './label.resolver';

describe('LabelResolver', () => {
  let resolver: LabelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelResolver],
    }).compile();

    resolver = module.get<LabelResolver>(LabelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
