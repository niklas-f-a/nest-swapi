import { Injectable } from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { FindOneCharacterDto } from './dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Character } from '@prisma/client';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(query: FindAllQueryDto): Promise<Character[]> {
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    return await this.prisma.character.findMany({ skip, take });
  }

  async findOne(id: string, queries: FindOneCharacterDto): Promise<Character> {
    const includeQuery = Object.entries(queries).reduce((previous, current) => {
      return current[1] ? { ...previous, [current[0]]: current[1] } : previous;
    }, {});

    return await this.prisma.character.findUnique({
      where: { id },
      include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
    });
  }
}
