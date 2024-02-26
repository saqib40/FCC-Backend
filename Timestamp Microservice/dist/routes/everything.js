"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const current_1 = __importDefault(require("../handlers/current"));
const date_1 = __importDefault(require("../handlers/date"));
router.get("/", current_1.default);
router.get("/:date", date_1.default);
exports.default = router;
