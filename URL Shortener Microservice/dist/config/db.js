"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbURL = process.env.DATABASE_URL;
const dbConnect = () => {
    mongoose_1.default.connect(dbURL)
        .then(() => {
        console.log("Connection Succesfull");
    })
        .catch((error) => {
        console.log("Issue in DB conection");
        console.error(error);
        process.exit(1);
    });
};
exports.default = dbConnect;
