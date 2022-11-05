import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PeopleModule } from './people/people.module';
import { Planets } from './planets/planets.module';

@Module({
  imports: [
    PrismaModule,
    PeopleModule,
    Planets,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
