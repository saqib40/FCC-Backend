"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const all_1 = __importDefault(require("./routes/all"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
dotenv_1.default.config();
const port = parseInt(process.env.PORT || "4000");
app.get("/api", (req, res) => {
    res.render("homePage");
});
app.use("/api/users", all_1.default);
(0, db_1.default)();
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
