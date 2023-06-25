import { log } from "console";
import prisma from "../modules/db";
import { nextSlotDates } from "../modules/slot";

export const getSlotDate = async (req, res) => {
    
    const date = nextSlotDates();
    
    res.status(200);
    res.json({slots: date});
}

export const bookSlot = async (req, res) => {
    const bookedBy = req.user.id;
    const deanId = req.body.deanId;
    const date = req.body.date;
    const time = req.body.time;

    const slot = await prisma.slot.create({
        data: {
            date: date,
            time: time,
            bookedBy: bookedBy,
            belongsToId: deanId,
        }
    })

    if(!slot){
        res.status(500)
        res.json({message: "Slot not booked please try again"});
        return
    }

    res.status(200);
    res.json({slot});
}