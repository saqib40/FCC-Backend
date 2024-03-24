import express, { Express, Request, Response } from "express";
import router from "./routes/everything";
import cors from "cors";

const port: number = 8000;

const app: Express = express();

// for testing
app.use(cors({optionsSuccessStatus: 200}));

app.use("/api", router);

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});