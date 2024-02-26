"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const everything_1 = __importDefault(require("./routes/everything"));
const port = 8000;
const app = (0, express_1.default)();
app.use("/api", everything_1.default);
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
