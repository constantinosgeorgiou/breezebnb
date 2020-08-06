require("dotenv").config();

const express = require("express");
const db = require("./database/queries");
const app = express();

const PORT = process.env.PORT;

console.log(process.env.PORT);

app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

// ROUTES
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${PORT}.`);
});
