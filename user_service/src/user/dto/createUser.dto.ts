import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// transformation and validation
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}
