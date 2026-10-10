import express from "express";
import {
  login,
  providerLogin,
  register,
} from "../controllers/auth.controllers.js";
import verifyUser from "../middlewares/verifyUser.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", verifyUser, login);
router.post("/providerLogin", providerLogin);

export default router;
