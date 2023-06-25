import express from "express";
import cors from "cors";
import morgan from "morgan";
import studentRouter from "./routers/studentRouter";
import { protect } from "./modules/auth";
import authRouter from "./routers/authRouter";

const app = express();
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.status(200);
    res.json({msg: "Hello from server"});
})

app.use("/auth", authRouter);
app.use("/api/student", protect, studentRouter);

export default app;