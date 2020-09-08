const express = require("express");
const router = express.Router();
const Reviews = require("../controllers/reviews");


// Create review
router.post("/", Reviews.createReview);

//Update review
router.put("/:review_id", Reviews.updateReview);

// Delete review
//router.delete("/:reviewId", Reviews.deleteReviewById);


module.exports = router;
