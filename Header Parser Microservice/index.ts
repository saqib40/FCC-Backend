import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT: number = 4000;

app.get("/api/whoami", (req: Request, res: Response) => {
    try {
        const ipAdd: string = req.ip as string;
        const language: string = req.headers["accept-language"] as string;
        const software: string = req.headers["user-agent"] as string
        return res.status(200).json({ ipAdd, language, software });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`Server started succesfully at ${PORT}`);
});
