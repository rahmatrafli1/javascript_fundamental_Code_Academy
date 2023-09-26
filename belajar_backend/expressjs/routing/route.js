import { Router } from "express";
import index from "../controller/index.js";
import user from "../controller/user.js";
import home from "../controller/home.js";
import about from "../controller/about.js";

const router = Router();

router.get("/", index.index);
router.get("/user", user.listuser);
router.post("/user", user.createuser);
router.put("/user/:id", user.updateuser);
router.delete("/user/:id", user.deleteuser);
router.get("/home", home.home);
router.get("/about", about.about);

export default router;
