const express = require("express");
const router = express.Router();
const user = require("../controllers/users");

// Find all users
router.get("/", user.findAllUsers);

// Find user by ID
router.get("/:userName", user.findUserByUserName);

// Create user
router.post("/", user.createUser);

// Update user
router.put("/:userName", user.updateUserByUserName);

// Delete user
router.delete("/:userName", user.deleteUserByUserName);

module.exports = router;
