require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser"); // Incoming request body parsing middleware
const cors = require("cors"); // Used for Cross-origin resource sharing
const helmet = require("helmet"); // Used as protection from some well-known web vulnerabilities by setting HTTP headers appropriately

const app = express();
const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

// Cords set up
// ------------
// Only allow requests from CORS_ORIGIN
const corsOptions = { origin: CORS_ORIGIN };
app.use(cors(corsOptions));

// TODO: add what helmet does: https://www.npmjs.com/package/helmet
app.use(helmet());

// Body parser set up
// ------------------
// Parses requests where Content-Type header
// is of type application/json
app.use(bodyParser.json());
// Parses requests where Content-Type header
// is of type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Requiring routes
const IndexRoutes = require("./routes/index.js");
const UsersRoutes = require("./routes/users.js");
const ListingsRoutes = require("./routes/listings.js");
const ReviewsRoutes = require("./routes/reviews.js");
const MessagesRoutes = require("./routes/messages.js");

// Using routes
app.use("/", IndexRoutes);
app.use("/users", UsersRoutes);
app.use("/listings", ListingsRoutes);
app.use("/reviews", ReviewsRoutes);
app.use("/messages", MessagesRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
});
