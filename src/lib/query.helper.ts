import { IFindAllQuery, IFindOneQuery } from 'src/dto';

type Query = IFindAllQuery & IFindOneQuery;

export class QueryHelper {
  constructor(private query: Query) {}
  checkLimit() {
    const newLimit = +this.query.limit;
    return newLimit < 1 || newLimit > 10 ? 10 : newLimit;
  }
  parsePageNr() {
    return +this.query.page > 0 ? +this.query.page : 1;
  }
  toBoolean(key: string) {
    return this.query[key] === 'true' ? true : false;
  }
}
