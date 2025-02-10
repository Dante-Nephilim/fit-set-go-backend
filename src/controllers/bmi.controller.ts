import { Request, Response } from "express";
import { BMIHistory } from "../models/bmi.model";

let bmiHistory: BMIHistory[] = [];

export const getBMI = (req: Request, res: Response) => {
  res.json(bmiHistory);
};

export const addBMI = (req: Request, res: Response) => {
  const { weight, height, bmi, date } = req.body;
  const newEntry: BMIHistory = {
    weight,
    height,
    bmi,
    date,
    id: Math.random().toString(36).substr(2, 9),
  };
  bmiHistory.push(newEntry);
  res.status(201).json(newEntry);
};
