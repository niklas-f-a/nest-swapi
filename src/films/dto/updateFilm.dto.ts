import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateFilmDto {
  @IsString()
  title: string;

  @IsNumber()
  episode: number;

  @IsString()
  opening_crawl: string;

  @IsString()
  director: string;

  @IsString()
  producer: string;

  @IsString()
  release_date: string;

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
