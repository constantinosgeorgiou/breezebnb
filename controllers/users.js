const bcrypt = require("bcryptjs"); // Used to hash and compare passwords of users

const database = require("../database/index");

// Retrieves all users
const retrieveUsers = (request, response) => {
    database.query(
        "SELECT * FROM users ORDER BY user_id ASC",
        (error, results) => {
            if (error) {
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            }

            response.status(200).json(results.rows);
        }
    );
};

// Retrieves a user by given username
const retrieveUserByUserName = (request, response) => {
    const userName = request.params.userName;

    database.query(
        "SELECT * FROM users WHERE user_name = $1",
        [userName],
        (error, results) => {
            if (error) {
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            }

            response.status(200).json(results.rows);
        }
    );
};

// Creates a new user
const createUser = async (request, response) => {
    // Retrieve data
    const {
        userName,
        firstName,
        lastName,
        email,
        phone,
        userRole,
        picture,
    } = request.body;

    // Retrieve and hash password
    const password = await bcrypt.hash(request.body.password, 10);

    // Check if email is already in use
    database.query(
        "SELECT user_id FROM users WHERE email = $1",
        [email],
        (error, results) => {
            if (error) {
                console.log("Error: ", error);

                // Internal server error
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else if (results.rowCount !== 0) {
                // Email already in use
                response.status(200).json({
                    response: {
                        message: "Email already in use",
                    },
                });
            } else {
                // Register new user
                database.query(
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
                            response.status(error.status || 400).json({
                                error: {
                                    message: error.message,
                                },
                            });
                        }
                        response
                            .status(201)
                            .send(`User added with username: ${userName}`);
                    }
                );
            }
        }
    );
};

// Updates data of user with given username
const updateUserByUserName = (request, response) => {
    const userName = request.params.userName;
    const { name, email } = request.body;

    database.query(
        "UPDATE users SET first_name = $1, email = $2 WHERE user_name = $3",
        [name, email, userName],
        (error, results) => {
            if (error) {
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response.status(204).send(`User modified with ID: ${userName}`);
        }
    );
};

// Deletes a user with given username
const deleteUserByUserName = (request, response) => {
    const userName = request.params.userName;

    database.query(
        "DELETE FROM users WHERE user_name = $1",
        [userName],
        (error, results) => {
            if (error) {
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response
                .status(204)
                .send(`User deleted with username: ${userName}`);
        }
    );
};

const retrieveUserNameByUserId = (request, response) => {
    const user_id = request.params.user_id;
    database.query(
        "SELECT first_name,last_name FROM users WHERE user_id = $1",
        [user_id],
        (error, results) => {
            if (error) {
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response.status(200).json(results.rows);
        }
    );
};

module.exports = {
    retrieveUsers,
    retrieveUserByUserName,
    // signIn,
    createUser,
    updateUserByUserName,
    deleteUserByUserName,
    retrieveUserNameByUserId,
};
