import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ovxiatv.mongodb.net/enquiry-portal"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log(`Some Error occurred while database connect:- ${error}`);
  }
}
