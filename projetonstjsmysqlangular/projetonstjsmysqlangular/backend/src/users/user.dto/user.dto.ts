import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserDto {

   
    @IsNotEmpty()
    @IsString()
    nome: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    sexo: string
    @IsNotEmpty()
    @IsString()
    telefone: string;

    }
