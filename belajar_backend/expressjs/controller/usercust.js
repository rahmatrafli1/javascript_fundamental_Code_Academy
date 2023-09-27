import { sequelize } from "../model/init-models.js";
import { errorHandling } from "../helper/errorhandling.js";

const insertusercust = async (req, res) => {
  try {
    const { dt_user, dt_cust } = req.body;
    const query = `call insertcustomer('[${JSON.stringify(
      dt_user
    )}]','[${JSON.stringify(dt_cust)}]')`;
    const result = await sequelize.query(query);
    res.send(errorHandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default { insertusercust };
