const express = require("express");
const router = express.Router();
const Hosting = require("../controllers/hosting");


// Retrieve listing by id
router.get("/:listing_owner", Hosting.retrieveListingByUserId);


module.exports = router; 
