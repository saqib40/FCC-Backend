import express, { Express, Request, Response } from "express";
import router from "./routes/everything";

const port: number = 8000;

const app: Express = express();

app.use("/api", router);

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});