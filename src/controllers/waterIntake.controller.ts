import { Request, Response } from "express";
import { WaterIntakeHistory } from "../models/waterIntake.model";

let waterIntakeHistory: WaterIntakeHistory[] = [];

export const getWaterIntake = (req: Request, res: Response) => {
  res.json(waterIntakeHistory);
};

export const addWaterIntake = (req: Request, res: Response) => {
  const { quantity, date } = req.body;
  const newEntry: WaterIntakeHistory = {
    quantity,
    date,
    id: Math.random().toString(36).substr(2, 9),
  };
  waterIntakeHistory.push(newEntry);
  res.status(201).json(newEntry);
};
