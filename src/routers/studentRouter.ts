import express, { Router } from "express";
import { getSlotDate } from "../handlers/slotHandlers";

const studentRouter = Router();

studentRouter.get("/slots", getSlotDate);
studentRouter.post("/", () => {});
studentRouter.delete("/:id", () => {});


export default studentRouter;