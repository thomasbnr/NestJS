import { Test, TestingModule } from '@nestjs/testing';
import { HumanController } from './human.controller';

describe('HumanController', () => {
  let controller: HumanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HumanController],
    }).compile();

    controller = module.get<HumanController>(HumanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
