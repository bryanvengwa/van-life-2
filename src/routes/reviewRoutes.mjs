import express from "express";
import * as ReviewController from "../controllers/reviewController.mjs";

const router = express.Router();

router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.post("/", addReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;