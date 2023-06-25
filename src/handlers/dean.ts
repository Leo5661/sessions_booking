import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
import prisma from "../modules/db";

export const createNewDean = async (req, res) => {

    const universityId = req.body.universityId;
    const password = await hashPassword(req.body.password)

    const user = await prisma.dean.create({
        data: {
            universityId: universityId,
            password: password
        }
    })

    const token = createJWT(user);
    res.json({token})
} 

export const deanLogin = async (req, res) => {

    const universityId = req.body.universityId;
    const password = req.body.password;

    const user = await prisma.dean.findUnique({
        where: {
            universityId: universityId,
        }
    })

    const isValid = await comparePasswords(password, user.password)

    if(!isValid){
        res.status(401);
        res.json({message: "Wrong Password!"});
        return;
    } 

    const token = createJWT(user);
    res.json({token});
}

export const bookedSlots = async (req, res) => {
    const id = req.user.id;

    const slot = await prisma.dean.findUnique({
        where:{
            id: id,
        },
        select: {
            slots: {
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