import { Controller, Get, Param } from '@nestjs/common';
import { Planet } from '@prisma/client';
import { PlanetService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private planetService: PlanetService) {}




  @Get(':id')
  findOne(@Param() id: number, ): Promise<Planet> {
    return this.planetService.findOne(id);
  }
}
