import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDto, FindOneFilmDto, UpdateFilmDto } from './dto';

@Injectable()
export class FilmsService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(query: FindAllQueryDto) {
    const count = await this.prisma.film.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    return {
      count,
      character: await this.prisma.film.findMany({ skip, take }),
    };
  }

  async findOne(id: string, query: FindOneFilmDto) {
    const includeQuery = this.helper.includeQuery(query);

    return this.prisma.film.findUnique({
      where: { id },
      include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.film.delete({ where: { id } });
      return { message: `Film with ${id} deleted` };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, dto: UpdateFilmDto) {
    const { characters, planets, starships, vehicles, species, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      characters,
      planets,
      starships,
      vehicles,
      species,
    });

    try {
      return await this.prisma.film.update({
        where: { id },
        data: { ...rest, ...relations },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async create(dto: CreateFilmDto) {
    const { characters, planets, starships, vehicles, species, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      characters,
      planets,
      starships,
      vehicles,
      species,
    });

    try {
      return await this.prisma.film.create({
        data: {
          ...rest,
          ...relations,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
