import express from "express";
import paths from "./paths/paths.js"
const app = express();
const port = process.env.port || 5000;
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"

dotenv.config()


app.use(cors())
try {mongoose.connect(process.env.CONNECTION_URL, ()=> {console.log("success")})} catch(error){console.log(error)}
app.use(bodyParser.json());

app.use("/", paths)
app.listen(port, () => console.log("server running on port 5000"))