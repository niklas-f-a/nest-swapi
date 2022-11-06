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
import { Film } from '@prisma/client';
import { FindAllQueryDto } from 'src/dto';
import { CreateFilmDto, FindOneFilmDto, UpdateFilmDto } from './dto';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private filmService: FilmsService) {}

  @Get()
  findAll(
    @Query() query: FindAllQueryDto,
  ): Promise<{ count: number; character: Film[] }> {
    return this.filmService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOneFilmDto,
  ): Promise<Film> {
    return this.filmService.findOne(id, query);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.filmService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFilmDto): Promise<Film> {
    return this.filmService.update(id, dto);
  }

  @Post()
  create(@Body() dto: CreateFilmDto) {
    return this.filmService.create(dto);
  }
}
