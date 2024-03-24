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
Object.defineProperty(exports, "__esModule", { value: true });
const submission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if req.files is present and contains the file
        if (!req.files || !req.files.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        // Fetch file
        const file = req.files.file;
        // the metadata thing
        return res.status(200).json({
            name: file.name,
            size: file.size,
            type: file.mimetype,
        });
    }
    catch (error) {
        res.status(500).json({
            "error": error,
        });
    }
});
exports.default = submission;
