import mongoose, { Schema } from "mongoose";

export interface Admin {
  email: string;
  password: string;
}
const adminSchema: Schema<Admin> = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const adminModel = mongoose.models.Admin as mongoose.Model<Admin> || mongoose.model<Admin>("Admin", adminSchema);

export default adminModel;
