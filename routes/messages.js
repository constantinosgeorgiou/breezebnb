const express = require("express");
const router = express.Router();
const Messages = require("../controllers/messages");



// Create message
router.post("/", Messages.createMessage);

// Delete message
router.delete("/:listing_id", Messages.deleteMessageByListingId);

// Listing messages for evrey sender separate
router.get("/:listing_id", Messages.retrieveListingCoversationBySenderReciver);

module.exports = router; 
