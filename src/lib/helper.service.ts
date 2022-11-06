import { Injectable } from '@nestjs/common';

interface ConnectIds {
  homeworld?: { id: string };
  films?: { id: string };
  species?: { id: string };
  vehicles?: { id: string };
  starships?: { id: string };
  residents?: { id: string };
  characters?: { id: string };
  planets?: { id: string };
  pilots?: { id: string };
}

@Injectable()
export class HelperService {
  isObjectEmpty(obj: unknown) {
    return Object.keys(obj).length === 0;
  }
  checkLimit(limit: number) {
    return limit < 0 || limit > 10 ? 10 : limit;
  }
  checkPage(page: number) {
    return page > 0 ? page : 1;
  }
  includeQuery(queries) {
    return Object.entries(queries).reduce((previous, current) => {
      return current[1] ? { ...previous, [current[0]]: current[1] } : previous;
    }, {});
  }

  filterUndefinedIds(ids: ConnectIds) {
    return Object.entries(ids)
      .filter((entry) => entry[1] !== undefined || entry[1] === false)
      .reduce((previous, current) => {
        return { ...previous, [current[0]]: { connect: current[1] } };
      }, {});
  }
}
