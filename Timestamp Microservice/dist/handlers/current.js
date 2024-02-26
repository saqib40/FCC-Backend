"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function current(req, res) {
    try {
        return res.status(200).json({
            "unix": Date.now(),
            "utc": new Date(Date.now()).toUTCString()
        });
    }
    catch (error) {
        // not sure if it's possible to encounter here, but than being too sure is characteristic of dumboo
        console.error(error);
        return res.status(500).json({
            "error": "Invalid Date"
        });
    }
}
exports.default = current;
