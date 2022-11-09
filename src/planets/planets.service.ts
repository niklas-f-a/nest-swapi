import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanetDto, FindOnePlanetDto, UpdatePlanetDto } from './dto';

@Injectable()
export class PlanetService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(query: FindAllQueryDto) {
    const count = await this.prisma.planet.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    try {
      return {
        count,
        planets: await this.prisma.planet.findMany({ skip, take }),
      };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string, query: FindOnePlanetDto) {
    const includeQuery = this.helper.includeQuery(query);

    try {
      return this.prisma.planet.findUnique({
        where: { id },
        include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
      });
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, dto: UpdatePlanetDto) {
    const { films, residents, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      residents,
      films,
    });

    try {
      return await this.prisma.planet.update({
        where: { id },
        data: { ...rest, ...relations },
      });
    } catch (error) {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: string) {
    try {
      await this.prisma.planet.delete({ where: { id } });
      return { message: `Planet with ${id} deleted` };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(dto: CreatePlanetDto) {
    const { residents, films, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      residents,
      films,
    });

    try {
      return await this.prisma.planet.create({
        data: {
          ...rest,
          ...relations,
        },
      });
    } catch (error) {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
