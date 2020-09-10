const bcrypt = require("bcrypt"); // Used to hash and compare passwords of users
const jwt = require("jsonwebtoken"); // Used to generate jwt token
const JWT_SECRET = process.env.JWT_SECRET; // Used to generate jwt token

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
    const password = await bcrypt.hash(request.body.password, 10); // Salt rounds: 10

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

// Sign in user
const signin = async (request, response) => {
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
                response.status(404).send({ message: "User not found." });
            } else {
                // Map result data to user object
                const user = results.rows[0];

                // Verify password is correct
                // Compares plain text password with hash
                // IMPORTANT NOTE:
                //   When comparing, plain text password
                //   goes FIRST, followd by hash
                //   Example:
                //    bcrypt.compare(PLAIN_TEXT, HASH, callback function)
                bcrypt.compare(
                    password,
                    user.password,
                    (error, passwordIsValid) => {
                        if (error) {
                            // Error while comparing hashes
                            response.status(error.status || 500).json({
                                error: {
                                    message: error.message,
                                },
                            });
                        } else if (passwordIsValid === false) {
                            console.log(password);
                            console.log(user.password);

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

                            // NOTE Regarding the underscores ( _ ):
                            //   Data was mapped to the user object
                            //   from the results of the database.
                            //   In the database fields have underscores.
                            response.status(200).send({
                                userId: user.user_id,
                                userName: user.user_name,
                                firstName: user.first_name,
                                lastName: user.last_name,
                                email: user.email,
                                phone: user.phone,
                                userRole: user.user_role,
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
};
