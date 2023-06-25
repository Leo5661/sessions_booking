import bcrypt from "bcrypt";

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

export const protect = (req, res, next) => {
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
 
    } catch (e) {

    }
}

