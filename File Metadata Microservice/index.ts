import express, { Express, Request, Response } from "express";
import fileUpload from "express-fileupload";
import path from "path";
import router from "./routes/allOfThem";
import cors from "cors";

const app: Express = express();

// for testing
app.use(cors({optionsSuccessStatus: 200}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "../", 'views'));

app.use("/api", router);

const port: number = 8000;
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
  });