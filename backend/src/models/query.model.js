import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  email: {
    type: String,
  },
  course: {
    type: String,
  },
  contact: {
    type: Number,
  },
  query: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export const Query = mongoose.model("Query", querySchema);
