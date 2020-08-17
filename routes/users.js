const express = require("express");
const router = express.Router();
const User = require("../controllers/users");

// Find all users
router.get("/", User.findAllUsers);

// Find user by ID
router.get("/:userName", User.findUserByUserName);

// Create user
router.post("/", User.createUser);

// Update user
router.put("/:userName", User.updateUserByUserName);

// Delete user
router.delete("/:userName", User.deleteUserByUserName);

module.exports = router;
