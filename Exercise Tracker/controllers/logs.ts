import { Request, Response } from "express";
import logModel from "../models/logStructure";

const getLogs = async(req: Request, res: Response) => {
    try {
        const id: string = req.params._id;
        const response = await logModel.findById(id).populate("log");
        res.status(200).json({
            "result": response,
        });
    }
    catch(error) {
        res.status(500).json({
            "error": error, 
        });
    }
}

export default getLogs;