const { json } = require("express");

const Pool = require("pg").Pool;
const pool = new Pool({ connectionString: process.env.DATABASE_URI });

const findAllUsers = (request, response) => {
    pool.query("SELECT * FROM users ORDER BY user_id ASC", (error, results) => {
        if (error) {
            console.error(error.message);
        }
        response.status(200).json(results.rows);
    });
};

const findUserByUserName = (request, response) => {
    const userName = request.params.userName;

    pool.query(
        "SELECT * FROM users WHERE user_name = $1",
        [userName],
        (error, results) => {
            if (error) {
                console.error(error.message);
            }
            response.status(200).json(results.rows);
        }
    );
};

const createUser = (request, response) => {
    console.log(request.body);
    const {
        userName,
        firstName,
        lastName,
        email,
        password,
        phone,
        userRole,
        picture,
    } = request.body;

    pool.query(
        "INSERT INTO users (user_name, first_name, last_name, email, password, phone, user_role, picture) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
        [
            userName,
            firstName,
            lastName,
            email,
            password,
            phone,
            userRole,
            picture,
        ],
        (error, results) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response
                .status(201)
                .send(`User added with username: ${result.insertId}`);
        }
    );
};

const updateUserByUserName = (request, response) => {
    const userName = request.params.userName;
    const { name, email } = request.body;

    pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE user_name = $3",
        [name, email, userName],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${userName}`);
        }
    );
};

const deleteUserByUserName = (request, response) => {
    const userName = request.params.userName;

    pool.query(
        "DELETE FROM users WHERE user_name = $1",
        [userName],
        (error, results) => {
            if (error) {
                throw error;
            }
            response
                .status(200)
                .send(`User deleted with username: ${userName}`);
        }
    );
};

module.exports = {
    findAllUsers,
    findUserByUserName,
    createUser,
    updateUserByUserName,
    deleteUserByUserName,
};
