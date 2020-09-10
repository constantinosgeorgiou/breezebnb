const bcrypt = require("bcryptjs"); // Used to hash and compare passwords of users
const database = require("../database/index");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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

    // Create new user
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
            } else {
                // User created
                response.status(201).send(
                    `User added with username: ${userName}` // SUCCESS
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

const authenticate = async (request, response) => {};

const signin = (request, response) => {
    const { userName, password } = request.body;

    // Find user with given username
    database.query(
        "SELECT * FROM users WHERE user_name = $1",
        [userName],
        (error, results) => {
            if (error) {
                // Internal server error
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else if (results.rowCount === 0) {
                // User not found
                response.statue(404).send({ message: "User not found." });
            } else {
                // Map result data to user object
                const user = results.rows[0];

                // Verify password is correct
                bcrypt.compare(
                    user.password,
                    password,
                    (error, passwordIsValid) => {
                        if (error) {
                            // Error while comparing hashes
                            response.status(error.status || 500).json({
                                error: {
                                    message: error.message,
                                },
                            });
                        } else if (passwordIsValid === false) {
                            // Password is invalid
                            response.status(401).send({
                                accessToken: null,
                                message: "Password is invalid.",
                            });
                        } else {
                            // Password is valid
                            // Generate token
                            const token = jwt.sign(
                                { userId: user.userId },
                                JWT_SECRET,
                                {
                                    expiresIn: "1h",
                                }
                            );

                            response.status(200).send({
                                userId: user.userId,
                                userName: user.userName,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                phone: user.phone,
                                userRole: user.userRole,
                                picture: user.picture,
                                accessToken: token,
                            });
                        }
                    }
                );
            }
        }
    );
};

module.exports = {
    retrieveUsers,
    retrieveUserByUserName,

    createUser,
    updateUserByUserName,
    deleteUserByUserName,

    signin,
    authenticate,
};
