import express, {Router} from "express";
import { saveUser, loginUser } from "../controllers/index.js";
const router = express.Router();



router.post("/register", saveUser)
router.post("/login", loginUser)


export default router;
