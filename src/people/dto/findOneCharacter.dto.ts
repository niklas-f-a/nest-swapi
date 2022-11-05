import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class FindOneCharacterDto {
  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  homeworld?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  films?: boolean;

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
