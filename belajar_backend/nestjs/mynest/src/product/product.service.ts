import { Injectable } from '@nestjs/common';
import { product } from 'models';
import { errorHandling } from 'src/helper/errorHandling';
import { createProductDto, updateProductDto } from './productdto.dto';

@Injectable()
export class ProductService {
  async createUpload(fields: createProductDto) {
    const result = await product.create(
      {
        name: fields.name,
        description: fields.description,
        category_id: fields.category_id,
        price: fields.price,
        image: fields.image,
        createdat: new Date(),
      },
      { returning: true },
    );
    return errorHandling(201, 'Upload Product berhasil ditambahkan!', result);
  }

  async updateUpload(id: number, fields: updateProductDto) {
    const result = await product.update(
      {
        name: fields.name,
        description: fields.description,
        category_id: fields.category_id,
        price: fields.price,
        image: fields.image,
        updatedat: new Date(),
      },
      { where: { id: id }, returning: true },
    );
    return errorHandling(200, 'Upload Product berhasil diubah!', result);
  }

  async removeUpload(id: number) {
    try {
      await product.destroy({ where: { id: id } });
      return errorHandling(200, 'sukses');
    } catch (e: any) {
      return errorHandling(400, e.message);
    }
  }

  async create(fields: createProductDto) {
    // return 'This action adds a new product';
    try {
      const result = await product.create(
        {
          name: fields.name,
          description: fields.description,
          category_id: fields.category_id,
          price: fields.price,
          image: fields.image,
          createdat: new Date(),
        },
        { returning: true },
      );
      return errorHandling(201, 'Produk berhasil ditambahkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async findAll() {
    // return `This action returns all product`;
    try {
      const result = await product.findAll();
      return errorHandling(200, 'Produk berhasil ditampilkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async findOne(id: number) {
    // return `This action returns a #${id} product`;
    try {
      const result = await product.findOne({
        where: { id: id },
      });
      return errorHandling(200, 'Produk berhasil ditampilkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async update(id: number, fields: updateProductDto) {
    // return `This action updates a #${id} product`;
    try {
      if (fields.image) {
      }
      const result = await product.update(
        {
          name: fields.name,
          description: fields.description,
          category_id: fields.category_id,
          price: fields.price,
          image: fields.image,
          updatedat: new Date(),
        },
        { where: { id: id }, returning: true },
      );
      return errorHandling(200, 'Produk berhasil diubah!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} product`;
    try {
      const result = await product.destroy({
        where: { id: id },
      });
      return errorHandling(200, 'Produk berhasil dihapus!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }
}
