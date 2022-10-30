import { Controller, Get, Query } from '@nestjs/common';
import { PeopleQueryDto } from './dto';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  findAll(@Query() query: PeopleQueryDto) {
    return this.peopleService.findAll(query);
  }
}
