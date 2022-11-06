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
import { Specie } from '@prisma/client';
import { FindAllQueryDto } from 'src/dto';
import { CreateSpecieDto, FindOneSpecieDto, UpdateSpecieDto } from './dto';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(private speciesService: SpeciesService) {}

  @Get()
  findAll(
    @Query() query: FindAllQueryDto,
  ): Promise<{ count: number; species: Specie[] }> {
    return this.speciesService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOneSpecieDto,
  ): Promise<Specie> {
    return this.speciesService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateSpecieDto,
  ): Promise<Specie> {
    return this.speciesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.speciesService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateSpecieDto): Promise<Specie> {
    return this.speciesService.create(dto);
  }
}
