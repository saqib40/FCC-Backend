import express, { Express, Request, Response } from "express";

const router = express.Router();

import homePage from "../controllers/homePage";
import submission from "../controllers/submission";
import redirection from "../controllers/redirect"

router.get("/", homePage);
router.post("/shorturl", submission);
router.get("/shorturl/:IP", redirection);

export default router;