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
      returning: true,
    });
    res.send(errorHandling(result, 200, "Sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

const getusercustomer = async (req, res) => {
  try {
    // left join all
    //const result = await models.users.findAndCountAll({
    //include: "customers",
    //});

    // inner join all
    // const result = await models.users.findAndCountAll({
    //   include: { model: models.customers, as: "customers", required: true },
    // });

    // inner join only attribute
    // const result = await models.users.findAndCountAll({
    //   include: [
    //     {
    //       model: models.customers,
    //       as: "customers",
    //       // required: true,
    //       // attributes: ["first_name", "last_name"],
    //     },
    //     {
    //       model: models.orders,
    //       as: "orders",
    //       include: {
    //         model: models.order_detail,
    //         as: "order_details",
    //         include: {
    //           model: models.product,
    //           as: "product",
    //           include: {
    //             model: models.product_category,
    //             as: "category",
    //           },
    //         },
    //       },
    //     },
    //   ],
    //   // attributes: ["username"],
    // });

    const result = await models.users.findAll({
      include: {
        all: true,
        nested: true,
      },
    });

    res.send(errorHandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

const viewModelsOrder = async (req, res) => {
  try {
    const result = await models.joinorders.findAll();
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
  getusercustomer,
  viewModelsOrder,
};
