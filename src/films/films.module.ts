import { Module } from '@nestjs/common';
import { HelperService } from 'src/lib/helper.service';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService, HelperService],
})
export class Films {}
