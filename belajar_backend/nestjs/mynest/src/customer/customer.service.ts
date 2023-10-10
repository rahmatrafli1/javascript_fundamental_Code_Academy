import { Injectable } from '@nestjs/common';
import { customers } from 'models';
import { errorHandling } from 'src/helper/errorHandling';

@Injectable()
export class CustomerService {
  async create(createCustomerDto: any) {
    // return 'This action adds a new customer';
    try {
      const result = await customers.create(
        {
          first_name: createCustomerDto.first_name,
          last_name: createCustomerDto.last_name,
          user_id: createCustomerDto.user_id,
        },
        { returning: true },
      );
      return errorHandling(201, 'Customer Berhasil ditambahkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async findAll() {
    // return `This action returns all customer`;
    try {
      const result = await customers.findAll();
      return errorHandling(200, 'Data Customer Berhasil ditampilkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async findOne(id: number) {
    // return `This action returns a #${id} customer`;
    try {
      const result = await customers.findOne({
        where: { id: id },
      });
      return errorHandling(200, 'Data Customer Berhasil ditampilkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async update(id: number, updateCustomerDto: any) {
    // return `This action updates a #${id} customer`;
    try {
      const result = await customers.update(
        {
          first_name: updateCustomerDto.first_name,
          last_name: updateCustomerDto.last_name,
          user_id: updateCustomerDto.user_id,
          updatedat: new Date(),
        },
        { where: { id: id }, returning: true },
      );
      return errorHandling(200, 'Customer berhasil diubah!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} customer`;
    try {
      const result = await customers.destroy({
        where: { id: id },
      });
      return errorHandling(200, 'Customer berhasil dihapus!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }
}
