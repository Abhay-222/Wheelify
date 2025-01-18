import express from "express";
import signup from "../Controllers/signup.js";
import generateOTP from "../Controllers/generateOTP.js";
import login from "../Controllers/login.js";
import changePassword from "../Controllers/changePassword.js";
import auth from "../Middlewares/auth.js";
import { resetPassword, resetPasswordToken } from "../Controllers/resetPassword.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/generate-otp", generateOTP);
router.post("/changePassword", auth, changePassword);
router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

export default router;