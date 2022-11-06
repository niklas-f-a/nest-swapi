import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { CreateCharDto, FindOneCharacterDto } from './dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Character } from '@prisma/client';
import { UpdateCharDto } from './dto/updateChar.dto';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(
    query: FindAllQueryDto,
  ): Promise<{ count: number; character: Character[] }> {
    const count = await this.prisma.character.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    return {
      count,
      character: await this.prisma.character.findMany({ skip, take }),
    };
  }

  async findOne(id: string, queries: FindOneCharacterDto): Promise<Character> {
    const includeQuery = this.helper.includeQuery(queries);

    return await this.prisma.character.findUnique({
      where: { id },
      include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
    });
  }

  async update(id: string, characterDto: UpdateCharDto) {
    return await this.prisma.character.update({
      where: { id },
      data: { ...characterDto },
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.character.delete({ where: { id } });
      return { message: `Character with ${id} deleted` };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(dto: CreateCharDto) {
    const { homeworld, films, species, vehicles, starships, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      homeworld,
      films,
      species,
      vehicles,
      starships,
    });

    try {
      return await this.prisma.character.create({
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
