import prisma from "../modules/db";
import { nextSlotDates } from "../modules/slot";

export const getSlotDate = async (req, res) => {
    
    let avelibleDate = [];
    const nextDate = nextSlotDates();
    const slots = await prisma.slot.findMany();

    if(slots.length > 0){
        slots.map((slot) => {
            nextDate.forEach(date => {
                if(date.date != slot.date){
                    avelibleDate.push(date);
                }
            });
    
        })
    } else {
        avelibleDate = nextDate.map(item => {return {...item}});
    }
    
    
    res.status(200);
    res.json({slots: avelibleDate});
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
            bookedById: bookedBy,
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