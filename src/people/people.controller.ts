import { Controller, Get, Param } from '@nestjs/common';
import { IFindAllQuery } from '../dto';
import { IFindOneCharacter } from './dto';
import { PeopleService } from './people.service';
import { FindAllQuery, FindOneQuery } from 'src/decorators';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  findAll(@FindAllQuery() query: IFindAllQuery) {
    return this.peopleService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @FindOneQuery() query: IFindOneCharacter) {
    return this.peopleService.findOne(id, query);
  }
}
