import { Injectable } from '@nestjs/common';
import { customers, users } from 'models';
import * as bcrypt from 'bcrypt';
import { errorHandling } from 'src/helper/errorHandling';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from './userdto.dto';

@Injectable()
export class UserService {
  constructor(private readonly sequelize: Sequelize) {}

  async getbyUser(fields: any) {
    try {
      const userdatabase = await users.findOne({
        where: {
          username: fields,
        },
      });
      return errorHandling(200, 'Sukses', userdatabase);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async create(createUserDto: any) {
    // return 'This action adds a new user';
    try {
      const salt = bcrypt.genSaltSync(10);
      const passhash = bcrypt.hashSync(createUserDto.password, salt);
      const result = await users.create(
        {
          username: createUserDto.username,
          password: passhash,
        },
        { returning: true },
      );
      return errorHandling(201, 'User Berhasil ditambahkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async insertusercust(fields: CreateUserDto) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const passhash = bcrypt.hashSync(fields.password, salt);

      const dtUser = {
        username: fields.username,
        password: passhash,
      };

      const dtCust = {
        firstname: fields.firstname,
        lastname: fields.lastname,
        createdat: new Date(),
      };

      const query = `call insertcustomer('[${JSON.stringify(
        dtUser,
      )}]','[${JSON.stringify(dtCust)}]')`;
      const result = await this.sequelize.query(query);
      return errorHandling(201, 'Berhasil ditambahkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async findAll() {
    // return `This action returns all user`;
    try {
      const result = await users.findAll();
      return errorHandling(200, 'User Berhasil ditampilkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async joincustomer() {
    try {
      const query = 'select * from joinusercustomer';
      const result = await this.sequelize.query(query);
      return errorHandling(200, 'User Berhasil ditampilkan', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async joincust() {
    try {
      const result = await users.findAll({
        include: customers,
        nest: true,
      });
      return errorHandling(200, 'User Berhasil ditampilkan', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async findOne(id: number) {
    // return `This action returns a #${id} user`;
    try {
      const result = await users.findOne({
        where: { id: id },
      });
      return errorHandling(200, 'User Berhasil ditampilkan!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async update(id: number, updateUserDto: any) {
    // return `This action updates a #${id} user`;
    try {
      const salt = bcrypt.genSaltSync(10);
      const passhash = bcrypt.hashSync(updateUserDto.password, salt);
      const result = await users.update(
        {
          username: updateUserDto.username,
          password: passhash,
          updatedat: new Date(),
        },
        { where: { id: id }, returning: true },
      );
      return errorHandling(200, 'User Berhasil diubah!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} user`;
    try {
      const result = await users.destroy({
        where: { id: id },
      });
      return errorHandling(200, 'User Berhasil dihapus!', result);
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }
}
