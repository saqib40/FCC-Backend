import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

// for testing
app.use(cors({optionsSuccessStatus: 200}));

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
