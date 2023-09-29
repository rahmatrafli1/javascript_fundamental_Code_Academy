import { errorHandling } from "../helper/errorhandling.js";
import { sequelize } from "../model/init-models.js";

const dataPaginationCust = async (req, res) => {
  try {
    const query = `select * from datacustcursor(${req.params.lim},${req.params.page})`;
    const result = await sequelize.query(query);
    res.send(errorHandling(result[0], 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default { dataPaginationCust };
