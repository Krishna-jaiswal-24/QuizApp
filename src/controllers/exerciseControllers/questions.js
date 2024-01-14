// controllers/questionController.js
import { Question } from "../../models/exercise.models.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const getAllQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find();
  res.json(new ApiResponse(200, questions, "Successfully retrieved questions"));
});

const addQuestion = asyncHandler(async (req, res) => {
  const { text, options, correctAnswer, difficulty } = req.body;

  // Validate request body
  if (!text || !options || !correctAnswer || difficulty === undefined) {
    throw new ApiError(400, "Invalid request body");
  }

  // Create new question
  const newQuestion = await Question.create({
    text,
    options,
    correctAnswer,
    difficulty,
  });

  res
    .status(201)
    .json(new ApiResponse(201, newQuestion, "Question added successfully"));
});

const updateQuestion = asyncHandler(async (req, res) => {
  const questionId = req.params.id;
  const { text, options, correctAnswer, difficulty } = req.body;

  // Validate request body
  if (!text || !options || !correctAnswer || difficulty === undefined) {
    throw new ApiError(400, "Invalid request body");
  }

  // Update the question
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { text, options, correctAnswer, difficulty },
    { new: true }
  );

  if (!updatedQuestion) {
    throw new ApiError(404, "Question not found");
  }

  res.json(
    new ApiResponse(200, updatedQuestion, "Question updated successfully")
  );
});

const deleteQuestion = asyncHandler(async (req, res) => {
  const questionId = req.params.id;

  // Delete the question
  const deletedQuestion = await Question.findByIdAndDelete(questionId);

  if (!deletedQuestion) {
    throw new ApiError(404, "Question not found");
  }

  res.json(
    new ApiResponse(200, deletedQuestion, "Question deleted successfully")
  );
});

const addBulkQuestions = asyncHandler(async (req, res) => {
  const { questions } = req.body;

  // Validate request body
  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    throw new ApiError(400, "Invalid request body");
  }

  // Create new questions
  const createdQuestions = await Question.insertMany(questions);

  res
    .status(201)
    .json(
      new ApiResponse(201, createdQuestions, "Questions added successfully")
    );
});

export {
  getAllQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  addBulkQuestions,
};
