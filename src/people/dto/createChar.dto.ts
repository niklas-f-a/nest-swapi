import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateCharDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  height?: number;

  @IsNumber()
  @IsOptional()
  mass?: number;

  @IsOptional()
  @IsString()
  hair_color?: string;

  @IsOptional()
  @IsString()
  skin_color?: string;

  @IsString()
  @IsOptional()
  eye_color?: string;

  @IsString()
  @IsOptional()
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
