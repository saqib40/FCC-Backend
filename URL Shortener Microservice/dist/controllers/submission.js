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
const dns_1 = __importDefault(require("dns"));
const structure_1 = __importDefault(require("../models/structure"));
function uniqueInteger() {
    const time = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const uniqueId = parseInt(time + random.toString()); // Concatenate and parse to integer
    return uniqueId;
}
function submission(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlString = req.body.theURL;
        try {
            const parsedUrl = new URL(urlString); // Parse the URL string
            const hostName = parsedUrl.hostname; // Extract the hostname
            dns_1.default.resolve(hostName, "A", (err, addresses) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    return res.status(500).json({ "error": err });
                }
            }));
            let randomInt = uniqueInteger();
            while (true) {
                const lookup = yield structure_1.default.findOne({ uniqueInt: randomInt });
                if (lookup) {
                    randomInt = uniqueInteger();
                }
                else {
                    break;
                }
            }
            const response = yield structure_1.default.create({
                url: urlString,
                uniqueInt: randomInt,
            });
            return res.status(200).json({
                "original_url": urlString,
                "short_url": randomInt,
            });
        }
        catch (error) {
            return res.status(400).json({ "error": "Invalid URL" });
        }
    });
}
exports.default = submission;
