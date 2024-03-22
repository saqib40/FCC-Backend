import { Request, Response } from 'express';

const submission = async (req: Request, res: Response) => {
    try {
        // Check if req.files is present and contains the file
        if (!req.files || !req.files.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Fetch file
        const file = req.files.file as any;

        // the metadata thing
        return res.status(200).json({
            name: file.name,
            size: file.size,
            type: file.mimetype,
        })
    }
    catch(error) {
        res.status(500).json({
            "error": error,
        })
    }
};

export default submission;