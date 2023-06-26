import prisma from "../modules/db";
const {DateTime} = require("luxon");
export const filterBookedSlots = async (req, res, next) => {
    const userId = req.user.id; 

    const date = DateTime.utc()
    console.log(date);
    next();
    // const slots = await prisma.slot.delete({
    //     where: {
    //         id: userId,
    //     }
    // })
}