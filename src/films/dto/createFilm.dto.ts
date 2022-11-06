import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateFilmDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  episode?: number;

  @IsOptional()
  @IsString()
  opening_crawl?: string;

  @IsOptional()
  @IsString()
  director?: string;

  @IsOptional()
  @IsString()
  producer?: string;

  @IsOptional()
  @IsString()
  release_date?: string;

  @IsOptional()
  @IsObject()
  characters?: { id: string };

  @IsOptional()
  @IsObject()
  planets?: { id: string };

  @IsOptional()
  @IsObject()
  starships?: { id: string };

  @IsOptional()
  @IsObject()
  vehicles?: { id: string };

  @IsOptional()
  @IsObject()
  species?: { id: string };
}
