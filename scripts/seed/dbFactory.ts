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

export default (db): DbConnect => {
  const dbDisconnect = async () => {
    await db.$disconnect();
  };

  const modelCreateMany = async (model: string, data: ModelData[]) => {
    await db[model].createMany({ data });
  };

  const formatConnect = async (model: Model, swapiIds: number[]) => {
    const ids: { id: number }[] = [];

    for (const swapiId of swapiIds) {
      const { id }: { id: number } = await db[model].findUnique({
        where: { swapiId },
      });
      ids.push({ id });
    }
    return ids;
  };

  const dropAllTables = async () => {
    await db.character.deleteMany({});
    await db.film.deleteMany({});
    await db.planet.deleteMany({});
    await db.specie.deleteMany({});
    await db.starship.deleteMany({});
    await db.vehicle.deleteMany({});
  };

  const createSpecieRelations = async () => {
    const count = await db.specie.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const specie = await db.specie.findUnique({ where: { swapiId } });

      if (specie) {
        await db.specie.update({
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
    const count = await db.vehicle.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const vehicle = await db.vehicle.findUnique({ where: { swapiId } });

      if (vehicle) {
        await db.vehicle.update({
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
    const count = await db.starship.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const starship = await db.starship.findUnique({ where: { swapiId } });

      if (starship) {
        await db.starship.update({
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
    const count = await db.film.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const film = await db.film.findUnique({ where: { swapiId } });

      if (film) {
        await db.film.update({
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
    const count = await db.planet.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const planet = await db.planet.findUnique({ where: { swapiId } });

      if (planet) {
        await db.planet.update({
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
    const count = await db.character.count();
    for (let i = 1; i <= count; i++) {
      const swapiId = String(i);
      const character = await db.character.findUnique({
        where: { swapiId },
      });

      if (character) {
        await db.character.update({
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
