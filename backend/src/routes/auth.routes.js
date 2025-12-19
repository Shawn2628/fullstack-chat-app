import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/singup", signup);
route.get("login", login);
router.get("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;