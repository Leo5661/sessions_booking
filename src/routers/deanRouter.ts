import express, { Router } from "express";
import { bookedSlots } from "../handlers/slotHandlers";

const deanRouter = Router();

deanRouter.get("/slots", bookedSlots);

export default deanRouter;