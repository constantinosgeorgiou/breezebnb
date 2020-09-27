const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

const { isAuthenticated } = require("../middleware/authentication");

const {
    isUsernameUnique,
    isEmailUnique,
    isRoleValid,
    isRoleNotAdmin,
    isApproved,
} = require("../middleware/verifier");

router.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

// Sign up route
router.post(
    "/auth/signup",
    [isUsernameUnique, isEmailUnique, isRoleValid, isRoleNotAdmin],
    Users.signup
);

// Sign in route
router.post("/auth/signin", Users.signin);

// Sign out route
router.post("/auth/signout/:userName", isAuthenticated, Users.signout);

// Sign all out route
router.post("/auth/signoutall/:userName", isAuthenticated, Users.signoutAll);

module.exports = router;