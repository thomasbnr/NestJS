import { Test, TestingModule } from '@nestjs/testing';
import { HumanService } from './human.service';

describe('HumanService', () => {
  let service: HumanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumanService],
    }).compile();

    service = module.get<HumanService>(HumanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
