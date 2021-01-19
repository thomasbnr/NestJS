import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { HumanController } from './human/human.controller';
import { HumanService } from './human/human.service';
import { HumanModule } from './human/human.module';

@Module({
  imports: [CarsModule, HumanModule],
  controllers: [AppController, HumanController],
  providers: [AppService, HumanService],
})
export class AppModule {}
