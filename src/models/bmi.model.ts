import mongoose from "mongoose";

const bmiSchema = new mongoose.Schema({
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  bmi: { type: Number, required: true },
  date: { type: Date, required: true },
  id: { type: String, required: true },
});

export const Bmi = mongoose.model("bmi", bmiSchema);
