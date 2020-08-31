const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

router.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

router.post("/signup", Users.createUser);

// router.post("/signin", Users.)

module.exports = router;
