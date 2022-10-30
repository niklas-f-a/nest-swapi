import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';

@Module({
  imports: [],
  providers: [PeopleService],
})
export class PeopleModule {}
