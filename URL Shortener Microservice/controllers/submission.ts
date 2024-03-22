import { Request, Response } from "express";
import dns from "dns";
import UrlModel from "../models/structure";

function uniqueInteger() : number {
    const time : number = Date.now();
    const random : number = Math.floor(Math.random() * 1000);
    const uniqueId = parseInt(time + random.toString()); // Concatenate and parse to integer
    return uniqueId;
}

export default async function submission(req: Request, res: Response) {
    const urlString: string = req.body.theURL;
    try {
        const parsedUrl = new URL(urlString); // Parse the URL string
        const hostName: string = parsedUrl.hostname; // Extract the hostname
        dns.resolve(hostName, "A", async (err, addresses: string[]) => {
            if (err) {
                return res.status(500).json({ "error": err });
            }
        });
        let randomInt = uniqueInteger();
        while (true) {
            const lookup = await UrlModel.findOne({uniqueInt: randomInt});
            if (lookup) {
                randomInt = uniqueInteger();
            }
            else {
                break;
            }
        }
        const response = await UrlModel.create({
            url: urlString,
            uniqueInt: randomInt,
        });
        return res.status(200).json({
            "original_url": urlString,
            "short_url": randomInt,
        })
    } catch (error) {
        return res.status(400).json({ "error": "Invalid URL" });
    }
}
