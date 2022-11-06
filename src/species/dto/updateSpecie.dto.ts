import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateSpecieDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  classification?: string;

  @IsOptional()
  @IsString()
  designation?: string;

  @IsOptional()
  @IsNumber()
  average_height?: number;

  @IsOptional()
  @IsString()
  skin_colors?: string;

  @IsOptional()
  @IsString()
  hair_colors?: string;

  @IsOptional()
  @IsString()
  eye_colors?: string;

  @IsOptional()
  @IsNumber()
  average_lifespan?: number;

  @IsOptional()
  @IsNumber()
  homeworld?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsObject()
  people?: { id: string };

  @IsOptional()
  @IsObject()
  films?: { id: string };
}
