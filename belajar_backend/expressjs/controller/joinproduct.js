import { errorHandling } from "../helper/errorhandling.js";
import { sequelize } from "../model/init-models.js";

const viewjoinproduct = async (req, res) => {
  try {
    const query = "select * from joinorders";
    const result = await sequelize.query(query);
    res.send(errorHandling(result, 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default { viewjoinproduct };
