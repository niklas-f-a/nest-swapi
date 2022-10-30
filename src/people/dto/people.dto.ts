import { IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { FindAllQueryDto } from 'src/dto';

export class PeopleQueryDto extends FindAllQueryDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === 'true' ? true : false))
  homeworld?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === 'true' ? true : false))
  species?: boolean;
}
