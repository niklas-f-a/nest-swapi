import {
  Body,
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
import { CreatePlanetDto, FindOnePlanetDto, UpdatePlanetDto } from './dto';
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
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePlanetDto,
  ): Promise<Planet> {
    return this.planetService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.planetService.delete(id);
  }

  @Post()
  create(@Body() dto: CreatePlanetDto): Promise<Planet> {
    return this.planetService.create(dto);
  }
}
