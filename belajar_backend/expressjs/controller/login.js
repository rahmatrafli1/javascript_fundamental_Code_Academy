import { errorHandling } from "../helper/errorhandling.js";
import models from "../model/init-models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const masuk = async (req, res) => {
  try {
    const { usr, pswd } = req.body;
    const userdatabase = await models.users.findOne({
      where: {
        username: usr,
      },
    });
    if (userdatabase) {
      if (bcrypt.compareSync(pswd, userdatabase.password)) {
        const token = jwt.sign(
          {
            username: userdatabase.username,
            createdat: userdatabase.createdat,
          },
          process.env.SECRET_KEY
        );
        res.send(errorHandling(token, 200, "Sukses"));
      } else {
        res.send(errorHandling("Password anda salah!", 200, "Error!"));
      }
    } else {
      res.send(errorHandling("Username anda tidak ditemukan!", 200, "Error!"));
    }
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

const cektoken = async(req, res, next) => {
    try {
        const token = req.headers.authorization
        if(token){
            const verifytoken = jwt.verify(token, process.env.SECRET_KEY)
            if(verifytoken){
                next()
            }else{
                res.send(errorHandling("Token anda salah!", 200, "Error!"))
            }
        }else{
            res.send(errorHandling("Tidak bisa masuk ke halaman ini", 200, "Error!"))
        }       
    } catch (error) {
        res.send(errorHandling(400, error.message))
    }
}

export default { masuk, cektoken };
