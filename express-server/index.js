import express from "express";
import paths from "./paths/paths.js"
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
    res.send("Hello from the server")
})
app.use("/", paths)
app.listen(port, () => console.log("server running on port 5000"))