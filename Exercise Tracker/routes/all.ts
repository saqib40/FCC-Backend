import express, { Express, Request, Response } from "express";
import {getAllUsers, saveUser} from "../controllers/users";
import saveExercise from "../controllers/exercises";
import getLogs from "../controllers/logs";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", saveUser);

router.post("/:_id/exercises", saveExercise);
router.get(":_id/logs", getLogs);

export default router;