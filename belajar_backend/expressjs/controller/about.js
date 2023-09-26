import { errorHandling } from "../helper/errorhandling.js";

const about = async (req, res) => {
  try {
    await res.send("Ini Halaman About");
  } catch (error) {
    res.send(errorHandling(400, "Gagal Request"));
  }
};

export default {
  about,
};
