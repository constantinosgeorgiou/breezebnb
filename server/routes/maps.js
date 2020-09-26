const express = require("express");
const router = express.Router();
const maps = require("../controllers/maps");



// Create message
router.post("/:listing_id", maps.createCoordinates);


// Create message
router.get("/:listing_id", maps.retrieveCoordinates);



module.exports = router; 
