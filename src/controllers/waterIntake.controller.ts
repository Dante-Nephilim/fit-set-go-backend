import { Request, Response } from "express";
import { WaterIntakeHistory } from "../models/waterIntake.model";

export const getWaterIntake = async (req: Request, res: Response) => {
  try {
    const history = await WaterIntakeHistory.find({});
    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addWaterIntake = async (req: Request, res: Response) => {
  try {
    const { quantity, date } = req.body;
    const newEntry = new WaterIntakeHistory({ quantity, date });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json(err);
  }
};
