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