import { errorHandling } from "../helper/errorhandling.js";
import { sequelize } from "../model/init-models.js";

const searchuname = async (req, res) => {
  try {
    const query = `select * from searchuname('${req.params.usr}')`;
    const result = await sequelize.query(query);
    res.send(errorHandling(result[0], 200, "sukses"));
  } catch (error) {
    res.send(errorHandling(400, error.message));
  }
};

export default { searchuname };
