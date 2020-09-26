const express = require("express");
const router = express.Router();
const photos = require("../controllers/photos");




// Upload listing photo
router.post("/listings/upload", photos.photoListingUpload);

// Photo listing Retrieve
router.get("/listings/:listing_id", photos.photoListingRetrieve);

// Upload user photo
router.put("/users/upload", photos.photoUserUpload);

// Photo Retrieve
router.get("/users/:user_id", photos.photoUserRetrieve);





module.exports = router;
