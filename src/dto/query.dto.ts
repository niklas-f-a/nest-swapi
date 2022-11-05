export class IFindAllQuery {
  limit?: number;
  page?: number;
}

export class IFindOneQuery {
  homeworld: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}
