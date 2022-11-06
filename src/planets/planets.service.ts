import { Injectable } from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOnePlanetDto } from './dto';

@Injectable()
export class PlanetService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}
  async findAll(query: FindAllQueryDto) {
    const count = await this.prisma.planet.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    return {
      count,
      planets: this.prisma.planet.findMany({ skip, take }),
    };
  }

  async findOne(id: string, query: FindOnePlanetDto) {
    const includeQuery = this.helper.includeQuery(query);
    console.log(includeQuery);

    return this.prisma.planet.findUnique({
      where: { id },
      include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
    });
  }

  async update() {
    return 'hell'
  }

  async delete() {
    return 'bing'
  }

  async create() {
    return 'bdbdbdbdbd'
  }
}
