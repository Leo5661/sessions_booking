import prisma from "../modules/db";
import { nextSlotDates } from "../modules/slot";

export const getSlotDate = async (req, res) => {
    
    // const user = await prisma.student.findUnique({
    //     where:{
    //         id: req.token
    //     }
    // })

    // if(!user){
    //     res.status(401);
    //     res.json({message: "Bad token"});
    //     return
    // }


    const user = req.user;
    
    const date = nextSlotDates();
    
    res.status(200);
    res.json({user: user, slots: date});
}