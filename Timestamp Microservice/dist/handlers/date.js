"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function koiBiiDate(req, res) {
    try {
        const myArray = req.params.date.split("-");
        const newArray = myArray.map(element => Number(element));
        let unix, utc;
        if (newArray.length === 1) {
            unix = newArray[0];
            utc = new Date(newArray[0]).toUTCString();
        }
        else {
            unix = Date.UTC(newArray[0], newArray[1] - 1, newArray[2]);
            utc = new Date(unix).toUTCString();
        }
        return res.status(200).json({ unix, utc });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            "error": "Invalid Date"
        });
    }
}
exports.default = koiBiiDate;
