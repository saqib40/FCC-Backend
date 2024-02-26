import { Request, Response } from "express";

export default function koiBiiDate (req: Request, res: Response) {
    try {
        const myArray : string[] = req.params.date.split("-");
        const newArray : number[] = myArray.map(element => Number(element));
        
        let unix: number, utc: string;
        if (newArray.length === 1) {
          unix = newArray[0];
          utc = new Date(newArray[0]).toUTCString();
        } else {
          unix = Date.UTC(newArray[0], newArray[1] - 1, newArray[2]);
          utc = new Date(unix).toUTCString();
        }
    
        return res.status(200).json({ unix, utc });
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            "error": "Invalid Date"
        });
    }
}