import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { errorHandling } from 'src/helper/errorHandling';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class cekToken implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        res.send(errorHandling(200, 'Not authorized'));
      } else {
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        if (verify) {
          next();
          console.log('Akses middleware berhasil');
        }
      }
    } catch (error) {
      res.send(errorHandling(400, error.message));
    }
  }
}
