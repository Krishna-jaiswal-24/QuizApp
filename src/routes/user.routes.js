import { Router } from "express";
import { registerUser } from "../controllers/userControllers/register.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

export default router;