import { IsEmail, IsNotEmpty, IsOptional, IsString, IsIn, MaxLength, MinLength } from 'class-validator';
import { PACK_TYPES } from '@shared/constants';

export class SendMessageDto {
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsEmail({}, { message: 'Email invalide' })
  @MaxLength(255)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  company?: string;

  @IsOptional()
  @IsIn([...PACK_TYPES])
  pack?: string;

  @IsNotEmpty({ message: 'Le message est obligatoire' })
  @IsString()
  @MinLength(10, { message: 'Le message doit faire au moins 10 caracteres' })
  @MaxLength(5000)
  message!: string;
}
