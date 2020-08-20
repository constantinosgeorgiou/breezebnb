require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Requiring routes
const IndexRoutes = require("./routes/index.js");
const UsersRoutes = require("./routes/users.js");
// const ReviewsRoutes = require("./routes/reviews.js");
// const ListingsRoutes = require("./routes/listings.js");

// Using routes
app.use("/", IndexRoutes);
app.use("/users", UsersRoutes);
// app.use("", ReviewsRoutes);
// app.use("", ListingsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
});

