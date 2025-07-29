import mongoose, { Schema } from "mongoose";

export interface Submission {
  firstName: string;
  lastName: string;
  dob: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  status: string;
  email: string;
  ssn: string;
  createdAt: Date;
}
const submissionSchema: Schema<Submission> = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  dob: {
    type: String,
    trim: true,
    required: true,
  },
  street: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
  },
  zip: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
  },
  ssn: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const submissionModel =
  (mongoose.models.Submission as mongoose.Model<Submission>) ||
  mongoose.model<Submission>("Submission", submissionSchema);

export default submissionModel;
