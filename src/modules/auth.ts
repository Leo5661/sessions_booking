import bcrypt from "bcrypt";
import prisma from "./db";
import { Dean, Student } from "@prisma/client";

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password,hash);
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
}

export const createJWT = (user) => {
    const token  = user.id;
    return token;
}

export const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;

    if(!bearer){
        res.status(401);
        res.json({message: "Not Authorized"})
        return
    }

    const [, token] = bearer.split(' ')

    if(!token){
        res.status(401);
        res.json({message: "Not Authorized"})
        return
    }

    try{
        let user: Student | Dean;
        user = await prisma.student.findUnique({
            where:{
                id: token
            },
        })
    
        if(!user){
            user = await prisma.dean.findUnique({
                where:{
                    id: token
                },
            }) 
        }

        req.user = user;
        next()
        
    } catch (e) {
        res.status(401);
        res.json({message: "Not Authorized"})
        return
    }

    // req.token = token;
}

