const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");
const Reviews = require("../controllers/reviews");

const { isAuthenticated } = require("../middleware/authentication");

const { isAdmin } = require("../middleware/authorization");

// Find all users
router.get("/", [isAuthenticated, isAdmin], Users.retrieveUsers);

// Find user by ID
router.get("/:userName", isAuthenticated, Users.retrieveUserByUserName);

// Find first name and last name by ID
router.get("/name/:user_id", Users.retrieveUserNameByUserId);

// Delete user
router.delete("/:userid", Users.deleteUserByUserId);

// Retrieve all reviews directed to user
router.get(
    "/:userName/reviews-received",
    isAuthenticated,
    Reviews.retrieveReceivedReviews
);
// Update user account inforamtions
router.put("/update/account-info/:userName", isAuthenticated, Users.updateUserInfoByUserName);

// Update user address
router.put("/update/address/:useName",isAuthenticated, Users.updateUserAddByUserName);

// Update user password
router.put("/changePassword/:userid",isAuthenticated, Users.changePasswordByUserId);


module.exports = router;
