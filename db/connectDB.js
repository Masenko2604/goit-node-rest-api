import mongoose from "mongoose";

const { DB_URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected successfuly");
  } catch (error) {
    console.log(error);
  }
};