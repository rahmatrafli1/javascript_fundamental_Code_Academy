import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username tidak boleh kosong!' })
  @IsString({ message: 'Username harus berupa string!' })
  username: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong!' })
  @IsString({ message: 'Password harus berupa string!' })
  @MinLength(5, { message: 'Password harus lebih dari atau 5 karakter!' })
  password: string;
}
