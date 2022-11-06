import { Module } from '@nestjs/common';
import { HelperService } from 'src/lib/helper.service';
import { PlanetsController } from './planets.controller';
import { PlanetService } from './planets.service';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetService, HelperService],
})
export class Planets {}
