import express from "express";
import { createAccount, loginUser} from "../controllers/authentication.controller.js";
import { protect } from "../middlewares/protect.middleware.js";

const router = express.Router();


router.post("/signupAdmin",protect, createAccount);
router.post("/login", loginUser);



export default router;
