import { ModelData } from './types';

interface DbConnect {
  createRelations(): Promise<void>;
  dropAllTables(): Promise<void>;
  dbDisconnect(): Promise<void>;
  modelCreateMany(model: string, data: ModelData[]): Promise<void>;
}

enum Model {
  CHARACTER = 'character',
  PLANET = 'planet',
  FILM = 'film',
  STARSHIP = 'starship',
  VEHICLE = 'vehicle',
  SPECIE = 'specie',
}

export default (prisma): DbConnect => {
  const dbDisconnect = async () => {
    await prisma.$disconnect();
  };

  const modelCreateMany = async (model: string, data: ModelData[]) => {
    await prisma[model].createMany({ data });
  };

  const formatConnect = async (model: Model, swapiIds: number[]) => {
    const ids: { id: number }[] = [];

    for (const swapiId of swapiIds) {
      const { id }: { id: number } = await prisma[model].findUnique({
        where: { swapiId },
      });
      ids.push({ id });
    }
    return ids;
  };

  const dropAllTables = async () => {
    await Promise.all([
      prisma.character.deleteMany({}),
      prisma.film.deleteMany({}),
      prisma.planet.deleteMany({}),
      prisma.specie.deleteMany({}),
      prisma.starship.deleteMany({}),
      prisma.vehicle.deleteMany({}),
    ]);
  };

  const createSpecieRelations = async () => {
    const count = await prisma.specie.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const specie = await prisma.specie.findUnique({ where: { swapiId } });

      if (specie) {
        await prisma.specie.update({
          where: { swapiId },
          data: {
            people: {
              connect: await formatConnect(
                Model.CHARACTER,
                specie.characterSwapiId,
              ),
            },
            films: {
              connect: await formatConnect(Model.FILM, specie.filmSwapiId),
            },
          },
        });
      }
    }
  };

  const createVehicleRelations = async () => {
    const count = await prisma.vehicle.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const vehicle = await prisma.vehicle.findUnique({ where: { swapiId } });

      if (vehicle) {
        await prisma.vehicle.update({
          where: { swapiId },
          data: {
            pilots: {
              connect: await formatConnect(
                Model.CHARACTER,
                vehicle.characterSwapiId,
              ),
            },
            films: {
              connect: await formatConnect(Model.FILM, vehicle.filmSwapiId),
            },
          },
        });
      }
    }
  };

  const createStarshipRelations = async () => {
    const count = await prisma.starship.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const starship = await prisma.starship.findUnique({ where: { swapiId } });

      if (starship) {
        await prisma.starship.update({
          where: { swapiId },
          data: {
            pilots: {
              connect: await formatConnect(
                Model.CHARACTER,
                starship.characterSwapiId,
              ),
            },
            films: {
              connect: await formatConnect(Model.FILM, starship.filmSwapiId),
            },
          },
        });
      }
    }
  };

  const createFilmRelations = async () => {
    const count = await prisma.film.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const film = await prisma.film.findUnique({ where: { swapiId } });

      if (film) {
        await prisma.film.update({
          where: { swapiId },
          data: {
            characters: {
              connect: await formatConnect(
                Model.CHARACTER,
                film.characterSwapiId,
              ),
            },
            planets: {
              connect: await formatConnect(Model.PLANET, film.planetSwapiID),
            },
            starships: {
              connect: await formatConnect(
                Model.STARSHIP,
                film.starshipSwapiId,
              ),
            },
            vehicles: {
              connect: await formatConnect(Model.VEHICLE, film.vehicleSwapiId),
            },
            species: {
              connect: await formatConnect(Model.SPECIE, film.specieSwapiId),
            },
          },
        });
      }
    }
  };

  const createPlanetRelations = async () => {
    const count = await prisma.planet.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const planet = await prisma.planet.findUnique({ where: { swapiId } });

      if (planet) {
        await prisma.planet.update({
          where: { swapiId },
          data: {
            residents: {
              connect: await formatConnect(
                Model.CHARACTER,
                planet.characterSwapiId,
              ),
            },
            films: {
              connect: await formatConnect(Model.FILM, planet.filmSwapiId),
            },
          },
        });
      }
    }
  };

  const createCharacterRelations = async () => {
    const count = await prisma.character.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const character = await prisma.character.findUnique({
        where: { swapiId },
      });

      if (character) {
        await prisma.character.update({
          where: { swapiId },
          data: {
            homeworld: {
              connect: await formatConnect(
                Model.PLANET,
                character.planetSwapiId,
              )[0],
            },
            species: {
              connect: await formatConnect(
                Model.SPECIE,
                character.specieSwapiId,
              )[0],
            },
            films: {
              connect: await formatConnect(Model.FILM, character.filmSwapiId),
            },
            vehicles: {
              connect: await formatConnect(
                Model.VEHICLE,
                character.vehicleSwapiId,
              ),
            },
            starships: {
              connect: await formatConnect(
                Model.STARSHIP,
                character.starshipSwapiId,
              ),
            },
          },
        });
      }
    }
  };

  const createRelations = async () => {
    await createSpecieRelations();
    await createVehicleRelations();
    await createStarshipRelations();
    await createFilmRelations();
    await createPlanetRelations();
    await createCharacterRelations();
  };

  return {
    createRelations,
    dropAllTables,
    dbDisconnect,
    modelCreateMany,
  };
};
