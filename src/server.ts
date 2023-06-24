import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200);
    res.json({msg: "Hello from server"});
})

export default app;