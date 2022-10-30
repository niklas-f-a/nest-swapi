import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [PrismaModule, PeopleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
