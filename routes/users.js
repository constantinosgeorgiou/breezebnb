const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

// Find all users
router.get("/", Users.retrieveUsers);

// Find user by ID
router.get("/:userName", Users.retrieveUserByUserName);

// Create user
router.post("/", Users.createUser);

// Update user
router.put("/:userName", Users.updateUserByUserName);

// Delete user
router.delete("/:userName", Users.deleteUserByUserName);

module.exports = router;
