const express = require("express");
const router = express.Router();
const Messages = require("../controllers/messages");



// Create review
router.post("/", Messages.createMessage);



module.exports = router; 
