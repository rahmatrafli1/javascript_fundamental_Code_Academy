import { errorHandling } from "../helper/errorhandling.js";

const index = async (req, res) => {
  try {
    await res.send("Ini Halaman Index");
  } catch (error) {
    res.send(errorHandling(400, "Gagal Request"));
  }
};

export default {
  index,
};
