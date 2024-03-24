import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import path from "path";
import router from "./routes/all";
import dbConnect from "./config/db";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port: number = parseInt(process.env.PORT || "4000");

const app: Express = express();

// for testing
app.use(cors({optionsSuccessStatus: 200}));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "../", 'views'));

app.use("/api", router);

dbConnect();

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});