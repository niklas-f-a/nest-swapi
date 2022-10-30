import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [],
  providers: [PeopleService],
  controllers: [PeopleController],
})
export class PeopleModule {}
