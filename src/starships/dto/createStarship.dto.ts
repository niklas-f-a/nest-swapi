import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateStarshipDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsNumber()
  cost_in_credits?: number;

  @IsOptional()
  @IsNumber()
  length?: number;

  @IsOptional()
  @IsNumber()
  passengers?: number;

  @IsOptional()
  @IsNumber()
  cargo_capacity?: number;

  @IsOptional()
  @IsNumber()
  MGLT?: number;

  @IsOptional()
  @IsString()
  max_atmosphering_speed?: string;

  @IsOptional()
  @IsString()
  crew?: string;

  @IsOptional()
  @IsString()
  consumables?: string;

  @IsOptional()
  @IsString()
  hyperdrive_rating?: string;

  @IsOptional()
  @IsString()
  starship_class?: string;

  @IsOptional()
  @IsObject()
  pilots?: { id: string };

  @IsOptional()
  @IsObject()
  films?: { id: string };
}
