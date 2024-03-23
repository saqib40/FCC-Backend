"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exerciseStructure_1 = __importDefault(require("../models/exerciseStructure"));
const logStructure_1 = __importDefault(require("../models/logStructure"));
const saveExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, duration, date } = req.body;
        const exercise = yield exerciseStructure_1.default.create({ username, duration, date });
        const count = yield exerciseStructure_1.default.find({ username: username }).countDocuments();
        const log = yield logStructure_1.default.findOneAndUpdate({ username: username }, {
            username: username,
            count: count,
            $push: { log: exercise }
        }, {
            new: true, // to return modified document
            upsert: true, // to create one if none is found
        });
        res.status(200).json({
            "user": log,
        });
    }
    catch (error) {
        res.status(500).json({
            "error": error,
        });
    }
});
exports.default = saveExercise;
