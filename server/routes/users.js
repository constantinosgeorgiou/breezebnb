const router = require("express").Router();

const Users = require("../controllers/users");
const Reviews = require("../controllers/reviews");

const { isAuthenticated } = require("../middleware/authentication");

const { isAdmin } = require("../middleware/authorization");

// Find user by username
router.get("/:username", isAuthenticated, Users.retrieveUserByUsername);

// Update user by username
router.put("/update/:username", isAuthenticated, Users.updateUserByUsername);

// Delete user by username
router.delete("/delete/:username", isAuthenticated, Users.deleteUserByUsername);

// Update user address
router.put(
    "/update/address/:useName",
    isAuthenticated,
    Users.updateUserAddByUserName
);

// Update user password
router.put(
    "/changePassword/:userid",
    isAuthenticated,
    Users.changePasswordByUserId
);

// Retrieve all reviews directed to user
router.get(
    "/:userName/reviews-received",
    isAuthenticated,
    Reviews.retrieveReceivedReviews
);

module.exports = router;
