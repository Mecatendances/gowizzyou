import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class RegisterWebinarDto {
  @IsNotEmpty({ message: 'Le prenom est obligatoire' })
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsEmail({}, { message: 'Email invalide' })
  @MaxLength(255)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  webinarId?: string;
}
