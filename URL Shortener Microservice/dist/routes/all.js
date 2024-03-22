"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const homePage_1 = __importDefault(require("../controllers/homePage"));
const submission_1 = __importDefault(require("../controllers/submission"));
const redirect_1 = __importDefault(require("../controllers/redirect"));
router.get("/", homePage_1.default);
router.post("/shorturl", submission_1.default);
router.get("/shorturl/:IP", redirect_1.default);
exports.default = router;
