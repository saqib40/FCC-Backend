import { Request, Response } from "express";
import exerciseModel from "../models/exerciseStructure";
import logModel from "../models/logStructure";

const saveExercise = async(req: Request, res: Response) => {
    try {
        const {username, duration, date} = req.body;
        const id: string = req.params._id;
        const exercise = await exerciseModel.create({username, duration, date, _id: id});
        const count: number = await exerciseModel.find({_id: id}).countDocuments();
        const log = await logModel.findOneAndUpdate(
            {_id: id},
            {
            _id: id,
            username: username,
            count: count,
            $push: {log: exercise}
            },
            {
            new: true, // to return modified document
            upsert: true, // to create one if none is found
            },
        );
        res.status(200).json({
            "user": log,
        });
    }
    catch (error) {
        res.status(500).json({
            "error": error, 
        });
    }

}

export default saveExercise;