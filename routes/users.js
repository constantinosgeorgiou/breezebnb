const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

const { verifyToken } = require("../middleware/authentication");

const { isAdmin } = require("../middleware/authorization");

// Find all users
router.get("/", [isAdmin], Users.retrieveUsers);

// Find user by ID
router.get("/:userName", Users.retrieveUserByUserName);

// Update user
router.put("/:userName", verifyToken, Users.updateUserByUserName);

// Delete user
router.delete("/:userName", Users.deleteUserByUserName);

module.exports = router;
