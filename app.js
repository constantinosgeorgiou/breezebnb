require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser"); // Incoming request body parsing middleware
const cors = require("cors"); // Used for Cross-origin resource sharing
const helmet = require("helmet"); // Used as protection from some well-known web vulnerabilities by setting HTTP headers appropriately

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());
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
