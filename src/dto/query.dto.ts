import { IsOptional, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindAllQueryDto {
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  limit?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  page?: number;
}
