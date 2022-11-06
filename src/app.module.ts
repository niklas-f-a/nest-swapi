import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { People } from './people/people.module';
import { Planets } from './planets/planets.module';
import { Films } from './films/films.module';
import { Starships } from './starships/starships.module';

@Module({
  imports: [
    PrismaModule,
    People,
    Planets,
    Films,
    Starships,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
