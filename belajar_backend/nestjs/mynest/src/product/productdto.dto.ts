import { IsNotEmpty, IsString } from 'class-validator';

export class createProductDto {
  @IsNotEmpty({ message: 'Nama Produk tidak boleh kosong!' })
  @IsString({ message: 'Nama Produk harus berupa string' })
  name: string;

  @IsNotEmpty({ message: 'Deskripsi Produk tidak boleh kosong!' })
  @IsString({ message: 'Deskripsi Produk harus berupa string' })
  description: string;

  @IsNotEmpty({ message: 'Kategori Produk tidak boleh kosong!' })
  category_id: number;

  @IsNotEmpty({ message: 'Harga Produk tidak boleh kosong!' })
  price: string;

  image: string;
}

export class updateProductDto {
  @IsNotEmpty({ message: 'Nama Produk tidak boleh kosong!' })
  @IsString({ message: 'Nama Produk harus berupa string' })
  name: string;

  @IsNotEmpty({ message: 'Deskripsi Produk tidak boleh kosong!' })
  @IsString({ message: 'Deskripsi Produk harus berupa string' })
  description: string;

  @IsNotEmpty({ message: 'Kategori Produk tidak boleh kosong!' })
  category_id: number;

  @IsNotEmpty({ message: 'Harga Produk tidak boleh kosong!' })
  price: string;

  image: string;

  oldimage: string;
}
