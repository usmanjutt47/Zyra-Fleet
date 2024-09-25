const express = require("express");
const router = express.Router();
const TruckEntry = require("../models/truckEntry");

const createEntry = async (req, res) => {
  try {
    const { userId, name, email, truckNumber, partDescription, notes } =
      req.body;

    const newTruckEntry = new TruckEntry({
      userId,
      name,
      email,
      truckNumber,
      partDescription,
      notes,
    });

    const savedEntry = await newTruckEntry.save();
    res
      .status(201)
      .json({ message: "Truck entry created successfully", data: savedEntry });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getEntries = async (req, res) => {
  try {
    const userId = req.params.userId;

    const entries = await TruckEntry.find({ userId });

    if (entries.length === 0) {
      return res.status(404).json({ message: "No entry available" });
    }

    res
      .status(200)
      .json({ message: "Entries retrieved successfully", data: entries });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createEntry,
  getEntries,
};
