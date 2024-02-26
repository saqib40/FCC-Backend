"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4000;
app.get("/api/whoami", (req, res) => {
    try {
        const ipAdd = req.ip;
        const language = req.headers["accept-language"];
        const software = req.headers["user-agent"];
        return res.status(200).json({ ipAdd, language, software });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
});
app.listen(PORT, () => {
    console.log(`Server started succesfully at ${PORT}`);
});
