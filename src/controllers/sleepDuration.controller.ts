import { Request, Response } from "express";
import { SleepDurationHistory } from "../models/sleepDurationHistory.model";

export const getSleepDuration = async (req: Request, res: Response) => {
  try {
    const history = await SleepDurationHistory.find({});
    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addSleepDuration = (req: Request, res: Response) => {
  try {
    const { duration, date } = req.body;
    const newEntry = new SleepDurationHistory({ duration, date });
    newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json(err);
  }
};
