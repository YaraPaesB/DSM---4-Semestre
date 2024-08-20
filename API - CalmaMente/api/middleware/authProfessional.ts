import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/user";

export const authorizeProfessional = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const token = req.headers.authorization!.split(' ')[1];

        const { _id, name, email, birthday, createdAt } = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as any

        const userExist = await User.findOne({ _id, name, email, birthday, createdAt });
        if(!userExist) {
            throw new Error('Not authenticated');
        }

        if (!userExist.isProfessional) {
            throw new Error('Not authorized')
        }
        req.body.auth = userExist;
        next();
    } catch (error:any) {
        console.log(error);
        console.log(error.message.indexOf("authenticated"));
        
        res.status(error.message.indexOf("authenticated") ? 401 : 403).json({
            success: false,
            message: error.message
        });
        return;
    }
}