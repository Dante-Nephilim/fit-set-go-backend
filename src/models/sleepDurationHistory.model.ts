import mongoose from "mongoose";

const sleepDurationHistorySchema = new mongoose.Schema({
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  id: { type: String, required: true },
});

export const SleepDurationHistory = mongoose.model("sleepDurationHistory", sleepDurationHistorySchema);
