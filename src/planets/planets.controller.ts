import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Planet } from '@prisma/client';
import { FindAllQueryDto } from 'src/dto';
import { FindOnePlanetDto } from './dto';
import { PlanetService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private planetService: PlanetService) {}

  @Get()
  findAll(@Query() query: FindAllQueryDto) {
    return this.planetService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOnePlanetDto,
  ): Promise<Planet> {
    return this.planetService.findOne(id, query);
  }

  @Patch(':id')
  update() {
    return this.planetService.update();
  }

  @Delete(':id')
  delete() {
    return this.planetService.delete();
  }

  @Post()
  create() {
    return this.planetService.create();
  }
}
