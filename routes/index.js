const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

const {
    isUsernameUnique,
    isEmailUnique,
    isRoleValid,
    isRoleNotAdmin,
} = require("../middleware/verifier");

router.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

router.post(
    "/auth/signup",
    [isUsernameUnique, isEmailUnique, isRoleValid, isRoleNotAdmin],
    Users.signup
);

router.post("/auth/signin", Users.signin);

module.exports = router;
