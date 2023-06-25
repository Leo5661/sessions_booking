import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
import prisma from "../modules/db";

export const createNewStudent = async (req, res) => {
    const universityId = req.body.universityId;
    const password = await hashPassword(req.body.password)
    const name = req.body.name;

    const user = await prisma.student.create({
        data: {
            universityId: universityId,
            password: password,
            name: name
        }
    })
 
    const token = createJWT(user);
    res.json({token})
} 

export const studentLogin = async (req, res) => {

    const universityId = req.body.universityId;
    const password = req.body.password;

    const user = await prisma.student.findUnique({
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