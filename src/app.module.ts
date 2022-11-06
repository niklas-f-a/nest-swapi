import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { People } from './people/people.module';
import { Planets } from './planets/planets.module';
import { Films } from './films/films.module';
import { Starships } from './starships/starships.module';
import { Vehicles } from './vehicles/vehicles.module';
import { Species } from './species/species.module';

@Module({
  imports: [
    PrismaModule,
    People,
    Planets,
    Films,
    Starships,
    Vehicles,
    Species,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
