import {
  SwapiCharacter,
  SwapiSpecie,
  SwapiStarship,
  SwapiPlanet,
  SwapiVehicle,
  SwapiFilm,
} from './types';

import {
  Character,
  Starship,
  Vehicle,
  Film,
  Specie,
  Planet,
} from '@prisma/client';

const extractIdFromUrl = (...urls: string[]) =>
  urls.map((url) => url.replace(/\D/g, ''));

export const buildCharacterData = (characters: SwapiCharacter[]) =>
  characters.map((character) => {
    const {
      homeworld,
      films,
      species,
      vehicles,
      starships,
      created,
      edited,
      url,
      height,
      mass,
      ...rest
    } = character;

    const charSwapiId = extractIdFromUrl(url);
    const planetSwapiId = extractIdFromUrl(homeworld);
    const filmSwapiId = extractIdFromUrl(...films);
    const specieSwapiId = extractIdFromUrl(...species);
    const vehicleSwapiId = extractIdFromUrl(...vehicles);
    const starshipSwapiId = extractIdFromUrl(...starships);

    return {
      ...rest,
      mass: +mass,
      height: +height,
      swapiId: charSwapiId[0],
      planetSwapiId,
      filmSwapiId,
      specieSwapiId,
      vehicleSwapiId,
      starshipSwapiId,
    } as Character;
  });

export const buildPlanetData = (planets: SwapiPlanet[]) =>
  planets.map((planet) => {
    const {
      residents,
      films,
      rotation_period,
      orbital_period,
      surface_water,
      diameter,
      population,
      created,
      edited,
      url,
      ...rest
    } = planet;

    return {
      ...rest,
      rotation_period: rotation_period,
      orbital_period: orbital_period,
      diameter: +diameter,
      surface_water: +surface_water,
      population: +population,
      characterSwapiId:
        residents.length !== 0 ? extractIdFromUrl(...residents) : undefined,
      filmSwapiId: films.length !== 0 ? extractIdFromUrl(...films) : undefined,
      swapiId: url.replace(/\D/g, ''),
    } as Planet;
  });

export const buildFilmData = (films: SwapiFilm[]) =>
  films.map((film) => {
    const {
      characters,
      planets,
      starships,
      vehicles,
      species,
      created,
      edited,
      url,
      ...rest
    } = film;
    return {
      ...rest,
      characterSwapiId: extractIdFromUrl(...characters),
      planetSwapiID: extractIdFromUrl(...planets),
      starshipSwapiId: extractIdFromUrl(...starships),
      vehicleSwapiId: extractIdFromUrl(...vehicles),
      specieSwapiId: extractIdFromUrl(...species),
      swapiId: extractIdFromUrl(url)[0],
    } as Film;
  });

export const buildStarshipData = (starships: SwapiStarship[]) =>
  starships.map((starship) => {
    const {
      pilots,
      films,
      cost_in_credits,
      length,
      passengers,
      cargo_capacity,
      MGLT,
      created,
      edited,
      url,
      ...rest
    } = starship;
    return {
      ...rest,
      cost_in_credits: +cost_in_credits,
      length: +length,
      passengers: +passengers,
      cargo_capacity: +cargo_capacity,
      MGLT: +MGLT,
      characterSwapiId: extractIdFromUrl(...pilots),
      filmSwapiId: extractIdFromUrl(...films),
      swapiId: extractIdFromUrl(url)[0],
    } as Starship;
  });

export const buildVehicleData = (vehicles: SwapiVehicle[]) =>
  vehicles.map((vehicle) => {
    const {
      pilots,
      films,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      cargo_capacity,
      passengers,
      created,
      edited,
      url,
      ...rest
    } = vehicle;

    return {
      ...rest,
      cost_in_credits: +cost_in_credits,
      passengers: +passengers,
      length: +length,
      cargo_capacity: +cargo_capacity,
      max_atmosphering_speed: +max_atmosphering_speed,
      characterSwapiId: extractIdFromUrl(...pilots),
      filmSwapiId: extractIdFromUrl(...films),
      swapiId: extractIdFromUrl(url)[0],
    } as Vehicle;
  });

export const buildSpeciesData = (species: SwapiSpecie[]) =>
  species.map((specie) => {
    const {
      homeworld,
      people,
      films,
      average_height,
      average_lifespan,
      created,
      edited,
      url,
      ...rest
    } = specie;

    return {
      ...rest,
      planetSwapiId: !!homeworld ? extractIdFromUrl(homeworld)[0] : [],
      characterSwapiId: extractIdFromUrl(...people),
      filmSwapiId: extractIdFromUrl(...films),
      swapiId: extractIdFromUrl(url)[0],
      average_height: +average_height,
      average_lifespan: +average_lifespan,
    } as Specie;
  });
