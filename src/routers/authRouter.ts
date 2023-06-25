import { Router } from "express";
import { createNewStudent, studentLogin } from "../handlers/student";
import { createNewDean, deanLogin } from "../handlers/dean";

const authRouter = Router();

authRouter.post("/signin/student", createNewStudent);
authRouter.post("/signin/dean", createNewDean);
authRouter.post("/login/dean", deanLogin);
authRouter.post("/login/student", studentLogin);

export default authRouter;