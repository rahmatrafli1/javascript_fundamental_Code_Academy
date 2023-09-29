import { Router } from "express";
import index from "../controller/index.js";
import user from "../controller/user.js";
import home from "../controller/home.js";
import about from "../controller/about.js";
import usercust from "../controller/usercust.js";
import updateorder from "../controller/updateorder.js";
import insertorder from "../controller/insertorder.js";
import joinproduct from "../controller/joinproduct.js";

const router = Router();

router.get("/", index.index);
router.get("/user", user.listuser);
router.post("/user", user.createuser);
router.put("/user/:id", user.updateuser);
router.delete("/user/:id", user.deleteuser);
router.get("/home", home.home);
router.get("/about", about.about);

router.post("/insertusercust", usercust.insertusercust);
router.post("/order", insertorder.insertorder);
router.post("/orderedit", updateorder.updateorder);
router.get("/getusercustomer", user.getusercustomer);
router.get("/getorders", joinproduct.viewjoinproduct);
router.get("/getjoinorders", user.viewModelsOrder);

export default router;
