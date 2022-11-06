import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleDto {
  @IsOptional()
  @IsString()
  name?: string;

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
  @IsString()
  max_atmosphering_speed?: number;

  @IsOptional()
  @IsString()
  crew?: string;

  @IsOptional()
  @IsString()
  consumables?: string;

  @IsOptional()
  @IsString()
  vehicle_class?: string;

  @IsOptional()
  @IsObject()
  pilots?: { id: string };

  @IsOptional()
  @IsObject()
  films?: { id: string };
}
