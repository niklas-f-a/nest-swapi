import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllQueryDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  limit?: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  page?: number;
}
