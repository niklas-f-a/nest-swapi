import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCharDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsNumber()
  mass?: number;

  @IsOptional()
  @IsString()
  hair_color?: string;

  @IsOptional()
  @IsString()
  skin_color?: string;

  @IsOptional()
  @IsString()
  eye_color?: string;

  @IsOptional()
  @IsString()
  birth_year?: string;

  @IsOptional()
  @IsString()
  gender?: string;
}
