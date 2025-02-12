import { Request, Response } from "express";
import { Bmi } from "../models/bmi.model";

export const getBMI = async (req: Request, res: Response) => {
  try {
    const history = await Bmi.find({});
    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addBMI = async (req: Request, res: Response) => {
  try {
    const { weight, height, bmi, date } = req.body;
    const newEntry = new Bmi({ weight, height, bmi, date });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json(err);
  }
};
