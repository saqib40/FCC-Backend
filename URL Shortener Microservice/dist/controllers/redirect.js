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
const structure_1 = __importDefault(require("../models/structure"));
function redirection(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield structure_1.default.findOne({ uniqueInt: req.params.IP });
            if (result) {
                res.redirect(result.url);
            }
            else {
                res.status(404).json({
                    "error": "Resource not found",
                });
            }
        }
        catch (error) {
            res.status(400).json({
                "error": error,
            });
        }
    });
}
exports.default = redirection;
