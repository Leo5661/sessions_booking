import prisma from "../modules/db";
const {DateTime} = require("luxon");
import { getMillsByISODateTime ,getMillsByDateTime, nextSlotDates } from "../modules/slot";

export const getSlotDate = async (req, res) => {
    
    let avelibleDate = [];
    const nextDate = nextSlotDates();
    const slots = await prisma.slot.findMany();

    if(slots.length > 0){
        slots.map((slot) => {
            nextDate.forEach(date => {
                const dbDateTime = getMillsByDateTime(slot.dateTime)
                if(date.dateTime.ts != dbDateTime){
                    avelibleDate.push({dateTime: date.dateTime});
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
    const date = req.body.dateTime;
    //if date is less the current && present in slot then return error
    //else book slot

    const slotDates = await prisma.slot.findMany({
        where: {
            belongsToId: deanId
        },
        select: {
            dateTime: true
        }
    })

    const currentDate = DateTime.now();
    const currentDateInMs = currentDate.ts;
    const sentDateInMs = getMillsByISODateTime(req.body.dateTime);

    if(sentDateInMs < currentDateInMs){
        res.status(200)
        res.json({message: "Error Date is not Available"});
        return
    } else {
        if(slotDates.length > 0){
            slotDates.forEach((slot) => {
                const dbDateTime = getMillsByDateTime(slot.dateTime)
                    if(sentDateInMs === dbDateTime){
                        res.status(200)
                        res.json({message: "Date is already booked"});
                        return
                    }   
            })
        }
    }

    try{
        const slot = await prisma.slot.create({
            data: {
                dateTime: date,
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
    } catch (e) {
        console.log(e);
        
        res.status(500)
        res.json({message: "Slot not booked please try again"});
        return
    }
}

export const bookedSlots = async (req, res) => {
    const id = req.user.id;

    const slot = await prisma.dean.findUnique({
        where:{
            id: id,
        },
        select: {
            slots: {
                where: {
                    dateTime: {
                        gte: DateTime.now().toString()
                    }
                },
                include: {
                    bookedBy: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            
        }
    })

    const bookedSlots = slot.slots;

    res.status(200)
    res.json({bookedSlots})
}