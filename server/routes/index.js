const router = require("express").Router();

router.get("/", (request, response) => {
    response.json({ message: "Request to Breezebnb API successful" });
});

module.exports = router;
