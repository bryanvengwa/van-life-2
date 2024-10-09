import express from "express";
import * as ReviewController from "../controllers/reviewController.mjs";

const router = express.Router();

router.get("/reviews", getAllReviews);
router.get("/reviews/:id", getReviewById);
router.post("/reviews", addReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

export default router;