import { errorHandling } from "../helper/errorhandling.js";

const home = async (req, res) => {
  try {
    await res.send("Ini Halaman Home");
  } catch (error) {
    res.send(errorHandling(400, "Gagal Request"));
  }
};

export default {
  home,
};
