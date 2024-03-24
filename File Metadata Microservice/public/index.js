"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const allOfThem_1 = __importDefault(require("./routes/allOfThem"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// for testing
app.use((0, cors_1.default)({ optionsSuccessStatus: 200 }));
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: "/tmp",
}));
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, "../", 'views'));
app.use("/api", allOfThem_1.default);
const port = 8000;
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
