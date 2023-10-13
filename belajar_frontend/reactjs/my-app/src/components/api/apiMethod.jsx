import axios from "../config/endpoint";

const findall = () => {
  return axios.get("/user/customer");
};
const create = (data) => {
  return axios.post("/user/usercust", data);
};

// eslint-disable-next-line
export default {
  findall,
  create,
};
