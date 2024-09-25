const mongoose = require("mongoose");

const truckEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    truckNumber: {
      type: String,
      required: true,
      unique: true,
    },
    partDescription: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const TruckEntry = mongoose.model("TruckEntry", truckEntrySchema);

module.exports = TruckEntry;
