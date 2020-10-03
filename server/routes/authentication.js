const router = require("express").Router();
const Users = require("../controllers/users");

const { isAuthenticated } = require("../middleware/authentication");

const {
    isUsernameUnique,
    isEmailUnique,
    isRoleValid,
    isRoleNotAdmin,
} = require("../middleware/verifier");

// Sign up route
//   - Make sure that username and email are unique
//   - Make sure that given role is valid and role is not admin
//   - Create user
router.post(
    "/auth/sign-up",
    [isUsernameUnique, isEmailUnique, isRoleValid, isRoleNotAdmin],
    Users.signup
);

// Sign in route
//   - Sign user in
router.post("/auth/sign-in", Users.signin);

// Sign out route
//   - Make sure that user is authenticated
//   - Sign user with given username out
router.post("/auth/sign-out/:username", isAuthenticated, Users.signout);

// Sign all out route
//   - Make sure that user is authenticated
//   - Sign all users with given username out
router.post("/auth/sign-out-all/:username", isAuthenticated, Users.signoutAll);

module.exports = router;
