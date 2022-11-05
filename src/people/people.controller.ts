import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { FindAllQueryDto } from '../dto';
import { PeopleService } from './people.service';
import { Character } from '@prisma/client';
import { FindOneCharacterDto } from './dto';
import { UpdateCharDto } from './dto/updateChar.dto';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  findAll(
    @Query() query: FindAllQueryDto,
  ): Promise<{ count: number; character: Character[] }> {
    return this.peopleService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOneCharacterDto,
  ): Promise<Character> {
    return this.peopleService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() characterDto: UpdateCharDto,
  ): Promise<Character> {
    return this.peopleService.update(id, characterDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.peopleService.delete(id);
  }
}
