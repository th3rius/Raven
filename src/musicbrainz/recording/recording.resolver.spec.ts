import {Test, TestingModule} from '@nestjs/testing';
import {RecordingResolver} from './recording.resolver';

describe('RecordingResolver', () => {
  let resolver: RecordingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordingResolver],
    }).compile();

    resolver = module.get < RecordingResolver > RecordingResolver;
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
