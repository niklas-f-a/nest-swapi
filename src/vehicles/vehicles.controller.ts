import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Vehicle } from '@prisma/client';
import { FindAllQueryDto } from 'src/dto';
import { CreateVehicleDto, FindOneVehicleDto, UpdateVehicleDto } from './dto';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private vehicleService: VehiclesService) {}

  @Get()
  findAll(
    @Query() query: FindAllQueryDto,
  ): Promise<{ count: number; starships: Vehicle[] }> {
    return this.vehicleService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query() query: FindOneVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.vehicleService.delete(id);
  }

  @Post()
  create(@Body() dto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(dto);
  }
}
