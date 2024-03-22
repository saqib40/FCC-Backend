import { Request, Response } from "express";

export default function homePage (req: Request, res: Response) {
    res.render("homePage");
}