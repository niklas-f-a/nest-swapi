import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class FindOnePlanetDto {
  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  residents?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  films?: boolean;
}
