const express = require("express");
const router = express.Router();
const photos = require("../controllers/photos");




// Create review
router.post("/upload", photos.photoUpload);


// Photo Retrieve
router.get("/:listing_id", photos.photoRetrieve);

module.exports = router;
