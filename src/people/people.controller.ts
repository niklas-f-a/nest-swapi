import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindAllQueryDto } from '../dto';
import { PeopleService } from './people.service';
import { Character } from '@prisma/client';
import { FindOneCharacterDto } from './dto';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  findAll(@Query() query: FindAllQueryDto): Promise<Character[]> {
    return this.peopleService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOneCharacterDto,
  ): Promise<Character> {
    return this.peopleService.findOne(id, query);
  }
}
