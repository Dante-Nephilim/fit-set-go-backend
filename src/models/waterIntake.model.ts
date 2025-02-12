import mongoose from "mongoose";

const waterIntakeSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const WaterIntakeHistory = mongoose.model("waterIntakeHistory", waterIntakeSchema);
