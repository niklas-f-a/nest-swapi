import { Injectable } from '@nestjs/common';

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
}
