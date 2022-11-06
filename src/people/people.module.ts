import { Module } from '@nestjs/common';
import { HelperService } from 'src/lib/helper.service';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [],
  providers: [PeopleService, HelperService],
  controllers: [PeopleController],
})
export class People {}
