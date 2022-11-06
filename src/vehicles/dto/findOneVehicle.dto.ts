import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class FindOneVehicleDto {
  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  pilots?: boolean;

  @Transform(({ value }) => (value === 'true' ? true : false))
  @IsBoolean()
  @IsOptional()
  films?: boolean;
}
