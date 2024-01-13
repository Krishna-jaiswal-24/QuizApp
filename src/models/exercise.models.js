import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    language: { type: String, required: true },
    difficultyLevel: { type: Number, required: true }, // 1-5 scale
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
  },
  { timestamps: true }
);

export const Exercise = mongoose.model("Exercise", exerciseSchema);
