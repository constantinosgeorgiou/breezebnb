const express = require("express");
const router = express.Router();
const Reviews = require("../controllers/reviews");


// find all reviews by review id
router.get("/:review_id", Reviews.retrieveReviewByReviewId);

// Create review
router.post("/", Reviews.createReview);

//Update review
router.put("/:review_id", Reviews.updateReview);

// Delete review
router.delete("/:review_id", Reviews.deleteReview);


module.exports = router; 
