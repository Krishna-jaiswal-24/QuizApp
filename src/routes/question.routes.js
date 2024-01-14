
import { Router } from "express";
import {
  getAllQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion ,
  addBulkQuestions ,
} from "../controllers/exerciseControllers/questions.js";

const router = Router();

router.get("/get-all-questions", getAllQuestions);
router.post("/add-question", addQuestion);
router.put("/update-question/:id", updateQuestion); // Add the update question route
router.delete("/delete-question/:id", deleteQuestion);
router.post("/add-bulk-questions", addBulkQuestions);
export default router;
