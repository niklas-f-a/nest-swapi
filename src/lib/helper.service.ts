import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  isObjectEmpty(obj: unknown) {
    return Object.keys(obj).length === 0;
  }
}
