import { Router } from "express";
import { registerUser } from "../controllers/userControllers/register.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  loginUser,
  logoutUser,
} from "../controllers/userControllers/loginUser.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);



export default router;
