import mongoose, {Document, Schema, Model} from "mongoose";

interface UrlDocument extends Document {
    url: string;
    uniqueInt: number;
}

const urlSchema = new Schema<UrlDocument>({
    url: {
        type: String,
        required: true,
    },
    uniqueInt: {
        type: Number,
        required: true,
    }
});

const UrlModel: Model<UrlDocument> = mongoose.model<UrlDocument>("URLs", urlSchema);

export default UrlModel;