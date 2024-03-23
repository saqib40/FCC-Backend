import { Request, Response } from "express";
import userModel from "../models/userStructure";

const getAllUsers = async(req: Request, res: Response) => {
    try {
        const response = await userModel.find();
        res.status(200).json({
            "users": response,
        });
    }
    catch(error) {
        res.status(500).json({
            "error": error, 
        })
    }
}

const saveUser = async(req: Request, res: Response) => {
    try {
        const username: string = req.body.username;
        console.log(username);
        const response = await userModel.create({
            username: username,
        });
        res.status(200).json({
            "message": "User created successfully",
            "user": response,
        });
    }
    catch(error) {
        res.status(500).json({
            "message": "kuch galat huwa",
            "error": error,
        })
    }
}

export {getAllUsers, saveUser};