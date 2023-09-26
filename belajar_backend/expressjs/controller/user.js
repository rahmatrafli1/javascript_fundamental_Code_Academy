import { errorHandling } from "../helper/errorhandling.js";
import models from "../model/init-models.js";
import bcrypt from "bcryptjs";

const listuser = async (req, res) => {
  try {
    const result = await models.users.findAll();
    res.send(errorHandling(result, 200, "Sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

const createuser = async (req, res) => {
  try {
    const { usr, pswd } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passhash = bcrypt.hashSync(pswd, salt);
    const result = await models.users.create(
      {
        username: usr,
        password: passhash,
      },
      { returning: true }
    );
    res.send(errorHandling(result, 200, "Sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

const updateuser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const passhash = bcrypt.hashSync(req.body.pswd, salt);
    const result = await models.users.update(
      {
        username: req.body.usr,
        password: passhash,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    res.send(errorHandling(result, 200, "Sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

const deleteuser = async (req, res) => {
  try {
    const result = await models.users.destroy({
      where: { id: req.params.id },
      returning: true
    });
    res.send(errorHandling(result, 200, "Sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default {
  listuser,
  createuser,
  updateuser,
  deleteuser,
};
