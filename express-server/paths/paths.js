import express, {Router} from "express";
const router = express.Router();
import {testController} from "../controllers/index.js"

router.get("/test", testController) 



export default router;
