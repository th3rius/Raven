import {Test, TestingModule} from '@nestjs/testing';
import {ReleaseResolver} from './release.resolver';

describe('ReleaseResolver', () => {
  let resolver: ReleaseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReleaseResolver],
    }).compile();

    resolver = module.get<ReleaseResolver>(ReleaseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
