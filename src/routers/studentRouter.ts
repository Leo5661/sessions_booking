import { Router } from "express";
import { bookSlot, getSlotDate } from "../handlers/slotHandlers";

const studentRouter = Router();

studentRouter.get("/slots", getSlotDate);
studentRouter.post("/bookslot", bookSlot);

export default studentRouter;