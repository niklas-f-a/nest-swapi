import { PrismaClient } from '@prisma/client';
import axios, { AxiosResponse } from 'axios';
import {
  buildCharacterData,
  buildPlanetData,
  buildFilmData,
  buildStarshipData,
  buildVehicleData,
  buildSpeciesData,
} from './modelBuilder';
import DbConnect from './dbFactory';
import { ModelBuilder } from './types';

const prisma = new PrismaClient();

const { createRelations, dropAllTables, dbDisconnect, modelCreateMany } =
  DbConnect(prisma);

const swapiBaseUrl = 'https://swapi.dev/api/';
const endPoints = [
  'people',
  'planets',
  'films',
  'starships',
  'vehicles',
  'species',
];

let currentPage = 1;
let totalPages: number;

const updateTotalPages = (count: number, results: number) =>
  Math.ceil(count / results);

const fetchData = async (endPoint: string) => {
  const res: AxiosResponse = await axios.get(
    `${swapiBaseUrl}${endPoint}/?page=${currentPage}`,
  );
  return res.data;
};

const fetchAll = async (
  endPoint: string,
  model: string,
  modelBuilder: ModelBuilder,
) => {
  const { results: res, count } = await fetchData(endPoint);
  currentPage++;
  totalPages = updateTotalPages(count, res.length);
  await modelCreateMany(model, modelBuilder(res));

  while (currentPage <= totalPages) {
    const { results } = await fetchData(endPoint);
    await modelCreateMany(model, modelBuilder(results));
    currentPage++;
  }
  currentPage = 1;
};

const getDataAndSeed = async (endPoint: string) => {
  switch (endPoint) {
    case 'people':
      await fetchAll('people', 'character', buildCharacterData);
      break;
    case 'planets':
      await fetchAll(endPoint, 'planet', buildPlanetData);
      break;
    case 'films':
      await fetchAll(endPoint, 'film', buildFilmData);
      break;
    case 'starships':
      await fetchAll(endPoint, 'starship', buildStarshipData);
      break;
    case 'vehicles':
      await fetchAll(endPoint, 'vehicle', buildVehicleData);
      break;
    case 'species':
      await fetchAll(endPoint, 'specie', buildSpeciesData);
  }
};

const main = async () => {
  await dropAllTables();
  for (const endPoint of endPoints) {
    await getDataAndSeed(endPoint);
  }
  await createRelations();
};
main()
  .catch((e) => console.log(e))
  .finally(async () => await dbDisconnect());
