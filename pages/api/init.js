
import AllSchema from "@/model/allModel";
import connectDB from "@/utils/connectDB";
import mongoose from "mongoose";

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getData(req, res);
      break;
  }
};

export const getData = async (req, res) => {
  try {

    const data = await AllSchema.find({});

    res.json({ data: data[0] });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


