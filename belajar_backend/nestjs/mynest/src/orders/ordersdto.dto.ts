import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrderProductDto {
  @IsNotEmpty({ message: 'User Id Tidak Boleh Kosong!' })
  @IsNumber({}, { message: 'User Id harus berupa Angka!' })
  user_id: number;

  @IsNotEmpty({ message: 'Total Produk tidak boleh kosong!' })
  @IsNumber({}, { message: 'Total Produk harus berupa Angka!' })
  total_product: number;

  @IsNotEmpty({ message: 'Total Harga tidak boleh kosong' })
  @IsNumber({}, { message: 'Total Harga harus berupa Angka!' })
  total_price: number;

  @IsNotEmpty({ message: 'Produk Id tidak boleh kosong' })
  @IsNumber({}, { message: 'Produk Id harus berupa Angka!' })
  product_id: number;

  @IsNotEmpty({ message: 'Quantity tidak boleh kosong' })
  @IsNumber({}, { message: 'Quantity harus berupa Angka!' })
  qty: number;
}
