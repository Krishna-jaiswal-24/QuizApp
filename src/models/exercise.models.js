// models/questionModel.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
      // You can set additional validation for difficulty if needed
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

export const Question = mongoose.model("Question", questionSchema);
