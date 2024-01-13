import mongoose from "mongoose";
import { User } from "../../models/user.models.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //validating if all the fields are present or not!
  if (
    [email, username, password].some((field) => !field || field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if the user already exists based on email or username
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  // Create a new user in the database
  const user = await User.create({
    email,
    username: username.toLowerCase(),
    password,
  });

  // Find the created user in the database, excluding password and refreshToken fields
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // Validation: Check if user creation failed
  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  // Return a successful response with the created user data
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});
