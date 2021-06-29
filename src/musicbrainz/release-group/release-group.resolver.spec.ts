import {Test, TestingModule} from '@nestjs/testing';
import {ReleaseGroupResolver} from './release-group.resolver';

describe('ReleaseGroupResolver', () => {
  let resolver: ReleaseGroupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReleaseGroupResolver],
    }).compile();

    resolver = module.get < ReleaseGroupResolver > ReleaseGroupResolver;
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
