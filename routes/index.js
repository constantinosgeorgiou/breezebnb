const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

const verifier = require("../middleware/verifier");

router.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

router.post(
    "/auth/signup",
    [
        verifier.isUsernameUnique,
        verifier.isEmailUnique,
        verifier.isRoleValid,
        verifier.isRoleNotAdmin,
    ],
    Users.createUser
);

// router.post("/signin", Users.)

module.exports = router;
