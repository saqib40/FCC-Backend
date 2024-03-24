import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import router from "./routes/all";
import bodyParser from 'body-parser';
import dbConnect from "./config/db";
import cors from "cors";

const app: Express = express();

// for testing
app.use(cors({optionsSuccessStatus: 200}));

app.use(bodyParser.json());

dotenv.config();
const port: number = parseInt(process.env.PORT || "4000");

app.get("/api", (req: Request, res: Response) => {
    res.render("homePage");
});

app.use("/api/users", router);

dbConnect();

app.listen(port, () => {
    console.log(`now listening on port ${port}`);
})