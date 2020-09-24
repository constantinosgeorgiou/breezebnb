const express = require("express");
const router = express.Router();
const Admin = require("../controllers/admin");
const Users = require("../controllers/users");

const { isAuthenticated } = require("../middleware/authentication");
const { isAdmin } = require("../middleware/authorization");

// Sign in route
router.post("/auth/signin", Users.signin);

// Sign out route
router.post("/:userName/signout", isAuthenticated, Admin.signout);

// Sign all out route
router.post("/:userName/signoutall", isAuthenticated, Admin.signoutAll);

// Approve user in route
router.put("/approve/:userName", Admin.approve);

// Retrive all listings of a user in route
router.get("/:userName/listings", Admin.retrieveListingByOwner);

module.exports = router;
