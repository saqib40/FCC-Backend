import { Request, Response } from "express";
import UrlModel from "../models/structure";

export default async function redirection (req: Request, res: Response) {
    try {
        const result = await UrlModel.findOne({uniqueInt: req.params.IP});
        if (result) {
            res.redirect(result.url);
        } else {
            res.status(404).json({
                "error": "Resource not found",
            });
        }
    }
    catch (error) {
        res.status(400).json({
            "error": error,
        })
    }
}