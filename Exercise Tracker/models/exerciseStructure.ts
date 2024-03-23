import mongoose, {Document, Schema, Model} from "mongoose";

export interface exerciseDoc extends Document {
    username: string,
    duration: number,
    date: string,
}

const exerciseSchema = new Schema<exerciseDoc>({
    username: String,
    duration: Number,
    date: {
        type: String,
        default: (new Date()).toDateString(),
    },
});

const exerciseModel: Model<exerciseDoc> = mongoose.model<exerciseDoc>("Exercise", exerciseSchema);

export default exerciseModel;