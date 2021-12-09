import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the server")
})
app.listen(5000, () => console.log("server running on port 5000"))