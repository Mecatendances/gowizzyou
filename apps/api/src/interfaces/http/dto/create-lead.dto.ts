import { IsEmail, IsOptional, IsString, IsIn, MaxLength } from 'class-validator';
import { LEAD_SOURCES, PACK_TYPES } from '@shared/constants';

export class CreateLeadDto {
  @IsEmail({}, { message: 'Email invalide' })
  @MaxLength(255)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  company?: string;

  @IsOptional()
  @IsIn([...LEAD_SOURCES])
  source?: string;

  @IsOptional()
  @IsIn([...PACK_TYPES])
  pack?: string;
}
