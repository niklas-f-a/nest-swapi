import { Module } from '@nestjs/common';
import { HelperService } from 'src/lib/helper.service';
import { StarshipsController } from './starships.controller';
import { StarshipsService } from './starships.service';

@Module({
  controllers: [StarshipsController],
  providers: [StarshipsService, HelperService],
})
export class Starships {}
