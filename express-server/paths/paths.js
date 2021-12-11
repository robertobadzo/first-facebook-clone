import express, {Router} from "express";
import { getAllUsers, saveUser } from "../controllers/index.js";
const router = express.Router();


router.get("/get", getAllUsers)
router.post("/register", saveUser)



export default router;
