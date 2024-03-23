import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import router from "./routes/all";
import bodyParser from 'body-parser';
import path from "path";
import dbConnect from "./config/db";

const app: Express = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "../", 'views'));

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