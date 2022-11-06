import { Module } from '@nestjs/common';
import { HelperService } from 'src/lib/helper.service';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';

@Module({
  controllers: [SpeciesController],
  providers: [SpeciesService, HelperService],
})
export class Species {}
