import express, { Router } from "express";
import { bookedSlots } from "../handlers/dean";

const deanRouter = Router();

deanRouter.get("/slots", bookedSlots);

export default deanRouter;