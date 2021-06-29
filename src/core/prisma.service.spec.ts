import {Test} from '@nestjs/testing';
import {OgmaService} from '@ogma/nestjs-module';
import {PrismaService} from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PrismaService,
        {
          provide: OgmaService,
          useValue: {
            debug: jest.fn(),
            warn: jest.fn(),
            error: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get < PrismaService > PrismaService;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
