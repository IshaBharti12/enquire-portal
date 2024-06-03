import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  username: {
    type: String,
  },

  password: {
    type: String,
  },
});

export const Admin = mongoose.model("Admin", adminSchema);
