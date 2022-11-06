import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreatePlanetDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  rotation_period?: string;

  @IsOptional()
  @IsString()
  orbital_period?: string;

  @IsOptional()
  @IsNumber()
  diameter?: number;

  @IsOptional()
  @IsString()
  climate?: string;

  @IsOptional()
  @IsString()
  gravity?: string;

  @IsOptional()
  @IsString()
  terrain?: string;

  @IsOptional()
  @IsNumber()
  surface_water?: number;

  @IsOptional()
  @IsNumber()
  population?: number;

  @IsOptional()
  @IsObject()
  residents?: { id: string };

  @IsOptional()
  @IsObject()
  films?: { id: string };
}
