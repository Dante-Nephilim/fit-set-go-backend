import { Request, Response } from "express";
import { SleepDurationHistory } from "../models/sleepDurationHistory.model";

let sleepDurationHistory: SleepDurationHistory[] = [];

export const getSleepDuration = (req: Request, res: Response) => {
  res.json(sleepDurationHistory);
};

export const addSleepDuration = (req: Request, res: Response) => {
  const { duration, date } = req.body;
  const newEntry: SleepDurationHistory = {
    duration,
    date,
    id: Math.random().toString(36).substr(2, 9),
  };
  sleepDurationHistory.push(newEntry);
  res.status(201).json(newEntry);
};
