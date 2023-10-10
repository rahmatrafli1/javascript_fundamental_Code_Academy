import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username tidak boleh kosong!' })
  @IsString({ message: 'Username harus berupa string!' })
  @Matches(/^[a-zA-Z]+$/, { message: 'Username harus diisi huruf!' })
  username: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong!' })
  @IsString({ message: 'Password harus berupa string!' })
  @MinLength(8, { message: 'Password harus lebih dari atau 8 karakter!' })
  password: string;

  @IsNotEmpty({ message: 'Nama depan tidak boleh kosong!' })
  @IsString({ message: 'Nama depan harus berupa string!' })
  firstname: string;

  @IsNotEmpty({ message: 'Nama Belakang tidak boleh kosong!' })
  @IsString({ message: 'Nama Belakang harus berupa string!' })
  lastname: string;
}
