import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class FindOneFilmDto {
  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  character?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  planets?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  species?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  vehicles?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  starships?: boolean;
}
