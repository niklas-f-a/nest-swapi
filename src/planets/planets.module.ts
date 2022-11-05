import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetService } from './planets.service';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetService],
})
export class Planets {}
