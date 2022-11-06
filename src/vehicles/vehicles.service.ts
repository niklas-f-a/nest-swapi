import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindAllQueryDto } from 'src/dto';
import { HelperService } from 'src/lib/helper.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVehicleDto, FindOneVehicleDto, UpdateVehicleDto } from './dto';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService, private helper: HelperService) {}

  async findAll(query: FindAllQueryDto) {
    const count = await this.prisma.planet.count();
    const take = this.helper.checkLimit(query?.limit);
    const skip = this.helper.checkPage(query?.page);

    return {
      count,
      starships: await this.prisma.vehicle.findMany({ skip, take }),
    };
  }

  async findOne(id: string, query: FindOneVehicleDto) {
    const includeQuery = this.helper.includeQuery(query);

    return this.prisma.vehicle.findUnique({
      where: { id },
      include: this.helper.isObjectEmpty(includeQuery) ? null : includeQuery,
    });
  }

  async update(id: string, dto: UpdateVehicleDto) {
    const { films, pilots, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      pilots,
      films,
    });

    try {
      return await this.prisma.vehicle.update({
        where: { id },
        data: { ...rest, ...relations },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      await this.prisma.vehicle.delete({ where: { id } });
      return { message: `Vehicle with ${id} deleted` };
    } catch {
      throw new HttpException(
        InternalServerErrorException,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(dto: CreateVehicleDto) {
    const { pilots, films, ...rest } = dto;
    const relations = this.helper.filterUndefinedIds({
      pilots,
      films,
    });

    try {
      return await this.prisma.vehicle.create({
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
