import express, {Router} from "express";
import { saveUser } from "../controllers/index.js";
const router = express.Router();


router.post("/register", saveUser)



export default router;
