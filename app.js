require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Requiring routes
const IndexRoutes = require("./routes/index.js");
const UsersRoutes = require("./routes/users.js");
const ListingsRoutes = require("./routes/listings.js");
// const ReviewsRoutes = require("./routes/reviews.js");

// Using routes
app.use("/", IndexRoutes);
app.use("/users", UsersRoutes);
app.use("/listings", ListingsRoutes);
// app.use("", ReviewsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
});
