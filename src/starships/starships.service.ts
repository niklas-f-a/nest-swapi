import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateStarshipDto,
  FindOneStarshipDto,
  UpdateStarshipDto,
} from './dto/';

@Injectable()
export class StarshipsService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(query: FindAllQueryDto) {
    const count = await this.prisma.planet.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    return {
      count,
      starships: await this.prisma.starship.findMany({ skip, take }),
    };
  }

  async findOne(id: string, query: FindOneStarshipDto) {
    const includeQuery = this.helper.includeQuery(query);

    return this.prisma.starship.findUnique({
      where: { id },
      include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
    });
  }

  async update(id: string, dto: UpdateStarshipDto) {
    const { films, pilots, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      pilots,
      films,
    });

    try {
      return await this.prisma.starship.update({
        where: { id },
        data: { ...rest, ...relations },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      await this.prisma.starship.delete({ where: { id } });
      return { message: `Starship with ${id} deleted` };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(dto: CreateStarshipDto) {
    const { pilots, films, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      pilots,
      films,
    });

    try {
      return await this.prisma.starship.create({
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
