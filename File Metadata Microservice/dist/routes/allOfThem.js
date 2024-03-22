"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const submission_1 = __importDefault(require("../controllers/submission"));
const homepage_1 = __importDefault(require("../controllers/homepage"));
const router = express_1.default.Router();
router.get("/", homepage_1.default);
router.post("/submit", submission_1.default);
exports.default = router;
