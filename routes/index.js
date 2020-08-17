const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

module.exports = router;
