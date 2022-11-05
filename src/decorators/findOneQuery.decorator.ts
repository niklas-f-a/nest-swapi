import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { QueryHelper } from '../lib';

export const FindOneQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const queryHelper = new QueryHelper(request.query);

    return {
      homeworld: queryHelper.toBoolean('homeworld'),
      films: queryHelper.toBoolean('films'),
      species: queryHelper.toBoolean('species'),
      vehicles: queryHelper.toBoolean('vehicles'),
      starships: queryHelper.toBoolean('starships'),
    };
  },
);
