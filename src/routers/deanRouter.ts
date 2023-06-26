import express, { Router } from "express";
import { bookedSlots } from "../handlers/slotHandlers";
import { filterBookedSlots } from "../middlewares/filterBookedSlots";

const deanRouter = Router();

deanRouter.get("/slots", filterBookedSlots, bookedSlots);

export default deanRouter;