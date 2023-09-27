import { sequelize } from "../model/init-models.js";
import { errorHandling } from "../helper/errorhandling.js";

const updateorder = async (req, res) => {
  try {
    const { dataorders, dataorderdetail } = req.body;
    const query = `call updateorder('[${JSON.stringify(
      dataorders
    )}]','${JSON.stringify(dataorderdetail)}')`;
    const result = await sequelize.query(query);
    res.send(errorHandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default { updateorder };
