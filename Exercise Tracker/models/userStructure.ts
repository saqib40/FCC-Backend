import mongoose, {Document, Schema, Model} from "mongoose";

interface userDoc extends Document {
    username: string,
}

const userSchema = new Schema<userDoc>({
    username: String,
});

const userModel: Model<userDoc> = mongoose.model<userDoc>("Users", userSchema);

export default userModel;