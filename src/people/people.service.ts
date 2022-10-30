import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PeopleQueryDto } from './dto';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService) {}

  checkLimit(limit: number): number {
    return limit < 1 || limit > 10 ? 10 : limit;
  }

  findAll(query: PeopleQueryDto) {
    const { page, homeworld, species } = query;
    const limit = this.checkLimit(query.limit);
    return this.prisma.character.findMany({ skip: page, take: limit });
  }
}
