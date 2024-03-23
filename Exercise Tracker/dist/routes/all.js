"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const exercises_1 = __importDefault(require("../controllers/exercises"));
const logs_1 = __importDefault(require("../controllers/logs"));
const router = express_1.default.Router();
router.get("/", users_1.getAllUsers);
router.post("/", users_1.saveUser);
router.post("/exercises", exercises_1.default);
router.get("/:_id/logs", logs_1.default);
exports.default = router;
