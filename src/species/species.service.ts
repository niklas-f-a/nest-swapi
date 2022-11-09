import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSpecieDto, FindOneSpecieDto, UpdateSpecieDto } from './dto';

@Injectable()
export class SpeciesService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(query: FindAllQueryDto) {
    const count = await this.prisma.specie.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    try {
      return {
        count,
        species: await this.prisma.specie.findMany({ skip, take }),
      };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string, query: FindOneSpecieDto) {
    const includeQuery = this.helper.includeQuery(query);

    try {
      return this.prisma.specie.findUnique({
        where: { id },
        include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
      });
    } catch (error) {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, dto: UpdateSpecieDto) {
    const { films, people, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      people,
      films,
    });

    try {
      return await this.prisma.specie.update({
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
      await this.prisma.specie.delete({ where: { id } });
      return { message: `Specie with ${id} deleted` };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(dto: CreateSpecieDto) {
    const { people, films, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      people,
      films,
    });

    try {
      return await this.prisma.specie.create({
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
