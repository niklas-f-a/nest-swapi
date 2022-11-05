import { Injectable } from '@nestjs/common';
import { IFindAllQuery, IFindOneQuery } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  findAll(query: IFindAllQuery) {
    const { page, limit } = query;
    return this.prisma.character.findMany({ skip: page, take: limit });
  }

  async findOne(id: string, queries: IFindOneQuery) {
    const query = Object.entries(queries).reduce((previous, current) => {
      return current[1] ? { ...previous, [current[0]]: current[1] } : previous;
    }, {});

    return this.helper.isObjectEmpty(query)
      ? await this.prisma.character.findUnique({ where: { id } })
      : await this.prisma.character.findUnique({
          where: { id },
          include: query,
        });
  }
}
