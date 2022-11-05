import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { QueryHelper } from '../lib';

export const FindAllQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const queryHelper = new QueryHelper(request.query);

    return {
      limit: queryHelper.checkLimit(),
      page: queryHelper.parsePageNr(),
    };
  },
);
