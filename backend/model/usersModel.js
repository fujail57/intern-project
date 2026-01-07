const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: Number,
      unique: true,
    },
    message: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const contactDb = mongoose.model("contact", contactSchema);

module.exports = contactDb;
