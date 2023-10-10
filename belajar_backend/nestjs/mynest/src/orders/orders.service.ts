/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './ordersdto.dto';
import { errorHandling } from 'src/helper/errorHandling';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class OrdersService {
  constructor(private readonly sequelize: Sequelize) {}
  create(createOrderDto: any) {
    return 'This action adds a new order';
  }

  async createPro(fields: CreateOrderProductDto[]) {
    // return 'This action adds a new order';
    try {
      const dt_order = {
        user_id: fields[0].user_id,
        total_product: fields[0].total_product,
        total_price: fields[0].total_price,
        createdat: new Date(),
      };
      const dt_orderdetail: {}[] = [];
      fields.map((e: any) => {
        dt_orderdetail.push({ product_id: e.product_id, qty: e.qty });
      });
      const query = `call insertorder('[${JSON.stringify(
        dt_order,
      )}]', '${JSON.stringify(dt_orderdetail)}')`;
      const result = await this.sequelize.query(query);
      return errorHandling(201, 'Berhasil ditambahkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: any) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
