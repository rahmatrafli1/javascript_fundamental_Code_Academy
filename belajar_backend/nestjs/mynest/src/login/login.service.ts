import { Injectable } from '@nestjs/common';
import { LoginDto } from './logindto.dto';
import { errorHandling } from 'src/helper/errorHandling';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginService {
  constructor(private readonly userservice: UserService) {}

  async loginUser(fields: LoginDto) {
    try {
      const userdatabase = await this.userservice.getbyUser(fields.username);
      const data = userdatabase.data;
      if (data) {
        if (bcrypt.compareSync(fields.password, data.password)) {
          const token = jwt.sign(
            {
              username: data.username,
              createdat: data.createdAt,
            },
            process.env.SECRET_KEY,
            { expiresIn: '1d' },
          );
          return errorHandling(200, 'Sukses Login!', token);
        } else {
          return errorHandling(400, 'Password anda salah!', 'Error!');
        }
      } else {
        return errorHandling(400, 'Username tidak ditemukan!', 'Error!');
      }
    } catch (error) {
      return errorHandling(500, error.message, 'Error!');
    }
  }
}
