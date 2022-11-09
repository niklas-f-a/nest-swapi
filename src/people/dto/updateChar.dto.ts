import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  @IsObject()
  homeworld?: { id: string };

  @IsOptional()
  @IsObject()
  films?: { id: string };

  @IsOptional()
  @IsObject()
  species?: { id: string };

  @IsOptional()
  @IsObject()
  vehicles?: { id: string };

  @IsOptional()
  @IsObject()
  starships?: { id: string };
}
