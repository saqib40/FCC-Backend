import express, { Express, Request, Response } from "express";

const router = express.Router();

import current from "../handlers/current";
import koiBiiDate from "../handlers/date";

router.get("/", current);
router.get("/:date", koiBiiDate);

export default router;