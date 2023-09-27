import { sequelize } from "../model/init-models.js";
import { errorHandling } from "../helper/errorhandling.js";

const insertorder = async (req, res) => {
  try {
    const { dt_order, dt_order_detail } = req.body;
    const query = `call insertorder('[${JSON.stringify(
      dt_order
    )}]','[${JSON.stringify(dt_order_detail)}]')`;
    const result = await sequelize.query(query);
    res.send(errorHandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default { insertorder };
