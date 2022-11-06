import { Module } from '@nestjs/common';
import { HelperService } from 'src/lib/helper.service';
import { VehicleController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

@Module({
  controllers: [VehicleController],
  providers: [VehiclesService, HelperService],
})
export class Vehicles {}
