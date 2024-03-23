import mongoose, {Document, Schema, Model} from "mongoose";
import exerciseModel, {exerciseDoc} from "./exerciseStructure";

interface logDoc extends Document {
    username: string,
    count: number,
    log: exerciseDoc[],
}

const logSchema = new Schema<logDoc>({
    username: String,
    count: Number,
    log: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: exerciseModel,
    }]
});

const logModel: Model<logDoc> = mongoose.model<logDoc>("Logs", logSchema);

export default logModel;