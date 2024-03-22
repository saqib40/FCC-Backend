import express, { Express, Request, Response } from "express";
import submission from "../controllers/submission";
import homePage from "../controllers/homepage";

const router = express.Router();

router.get("/", homePage);
router.post("/submit", submission);

export default router;