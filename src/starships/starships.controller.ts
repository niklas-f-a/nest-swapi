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
import { Starship } from '@prisma/client';
import { FindAllQueryDto } from 'src/dto';
import {
  CreateStarshipDto,
  FindOneStarshipDto,
  UpdateStarshipDto,
} from './dto/';
import { StarshipsService } from './starships.service';

@Controller('starships')
export class StarshipsController {
  constructor(private starshipsService: StarshipsService) {}

  @Get()
  findAll(
    @Query() query: FindAllQueryDto,
  ): Promise<{ count: number; starships: Starship[] }> {
    return this.starshipsService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOneStarshipDto,
  ): Promise<Starship> {
    return this.starshipsService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateStarshipDto,
  ): Promise<Starship> {
    return this.starshipsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.starshipsService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateStarshipDto): Promise<Starship> {
    return this.starshipsService.create(dto);
  }
}
