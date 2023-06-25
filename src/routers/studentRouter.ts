import express, { Router } from "express";
import { bookSlot, getSlotDate } from "../handlers/slotHandlers";

const studentRouter = Router();

studentRouter.get("/slots", getSlotDate);
studentRouter.post("/bookslot", bookSlot);
studentRouter.post("/", () => {});
studentRouter.delete("/:id", () => {});


export default studentRouter;