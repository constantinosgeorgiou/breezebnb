const bcrypt = require("bcrypt"); // Used to hash and compare passwords of users
const jwt = require("jsonwebtoken"); // Used to generate jwt token
const { query } = require("../database/index");
const JWT_SECRET = process.env.JWT_SECRET; // Used to generate jwt token

const database = require("../database/index");

// Creates a new user
const signup = async (request, response) => {
    // Retrieve data
    const {
        userName,
        firstName,
        lastName,
        email,
        phone,
        userRole,
        photo,
        birthday,
        address,
    } = request.body.user;

    // Retrieve and hash password
    const password = await bcrypt.hash(request.body.user.password, 10); // Salt rounds: 10

    // Store address of user
    database.query(
        "INSERT INTO addresses (country,state,city,zip_code,street_address,apartment_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING address_id",
        [
            address.country,
            address.state,
            address.city,
            address.zipCode,
            address.streetAddress,
            address.apartmentNumber,
        ],
        (error, addressQuery) => {
            if (error) {
                // Error while retrieving user id
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else {
                // Store address id to pass as parameter in INSET INTO USERS query
                const addressId = addressQuery.rows[0].address_id;

                // Create new user
                database.query(
                    "INSERT INTO users (user_name, first_name, last_name, email, password, phone, user_role, photo, birthday,address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING user_id, joined_on, approved, about",
                    [
                        userName,
                        firstName,
                        lastName,
                        email,
                        password,
                        phone,
                        userRole,
                        photo,
                        birthday,
                        addressId,
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

                            // Create user object with all the data
                            let user = {
                                // Add user id and "joined on" to user object
                                id: results.rows[0].user_id,
                                joined: results.rows[0].joined_on,
                                approved: results.rows[0].approved,
                                about: results.rows[0].about,
                                userName: userName,
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                phone: phone,
                                userRole: userRole,
                                photo: photo,
                                birthday: birthday,
                                address: address,
                            };

                            // Construct the payload
                            const payload = { id: user.id };

                            // Generate an authentication token
                            const token = jwt.sign(payload, JWT_SECRET, {
                                expiresIn: "8h",
                            });

                            // Store token into database
                            database.query(
                                "INSERT INTO tokens VALUES ($1, $2)",
                                [token, user.id],
                                (error, results) => {
                                    if (error) {
                                        // Error while storing the token
                                        response
                                            .status(error.status || 500)
                                            .json({
                                                error: {
                                                    message: error.message,
                                                },
                                            });
                                    } else {
                                        // Add token to user object
                                        user.accessToken = token;

                                        response.status(201).send({
                                            message:
                                                "Successfully created account! Welcome " +
                                                user.userName +
                                                "!",
                                            user,
                                            accessToken: token,
                                        }); // SUCCESS
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
};

// Sign in user
const signin = (request, response) => {
    const { userName, password } = request.body;

    // Find user with given username
    database.query(
        "SELECT user_id, user_name, first_name, last_name, about, email, password, phone, user_role, photo, approved, birthday, joined_on, country, state, city, zip_code, street_address, apartment_number FROM users, addresses WHERE users.address = addresses.address_id AND users.user_name = $1",
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
                // Passowrd hash
                const hash = results.rows[0].password;

                // Create user object
                let user = {
                    id: results.rows[0].user_id,
                    userName: results.rows[0].user_name,
                    firstName: results.rows[0].first_name,
                    lastName: results.rows[0].last_name,
                    about: results.rows[0].about,
                    email: results.rows[0].email,
                    phone: results.rows[0].phone,
                    userRole: results.rows[0].user_role,
                    photo: results.rows[0].photo,
                    approved: results.rows[0].birthday,
                    joined: results.rows[0].joined_on,
                    address: {
                        country: results.rows[0].country,
                        state: results.rows[0].state,
                        city: results.rows[0].city,
                        zipCode: results.rows[0].zip_code,
                        streetAddress: results.rows[0].street_address,
                        apartmentNumber: results.rows[0].apartment_number,
                    },
                };

                // Verify password is correct
                // Compares plain text password with hash
                // IMPORTANT NOTE:
                //   When comparing, plain text password
                //   goes FIRST, followd by hash
                //   Example:
                //    bcrypt.compare(PLAIN_TEXT, HASH, callback function)
                bcrypt.compare(password, hash, (error, passwordIsValid) => {
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

                        // Construct the payload
                        const payload = { id: user.id };

                        // Generate an authentication token
                        const token = jwt.sign(payload, JWT_SECRET, {
                            expiresIn: "8h",
                        });

                        // Store token into database
                        database.query(
                            "INSERT INTO tokens VALUES ($1, $2)",
                            [token, user.id],
                            (error, results) => {
                                if (error) {
                                    // Error while storing the token
                                    response.status(error.status || 500).json({
                                        error: {
                                            message: error.message,
                                        },
                                    });
                                } else {
                                    // Add token to user object
                                    user.accessToken = token;

                                    // NOTE Regarding the underscores ( _ ):
                                    //   Data was mapped to the user object
                                    //   from the results of the database.
                                    //   In the database fields have underscores.
                                    response.status(200).send({
                                        message:
                                            "Successfully signed in! Welcome " +
                                            user.userName +
                                            "!",
                                        user,
                                        accessToken: token,
                                    }); // SUCCESS
                                }
                            }
                        );
                    }
                });
            }
        }
    );
};

// Sign user out of the application
const signout = (request, response) => {
    // Find all tokens of the user
    database.query(
        "SELECT tokens.token FROM users, tokens WHERE users.user_id = tokens.bearer AND users.user_name = $1",
        [request.user.userName],
        (error, results) => {
            if (error) {
                // Error while fetching tokens of user
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else {
                // Remove current token from database
                database.query(
                    "DELETE FROM tokens WHERE token = $1",
                    [request.token],
                    (error, removed) => {
                        if (error) {
                            // Error while deleting token
                            response.status(error.status || 500).json({
                                error: {
                                    message: error.message,
                                },
                            });
                        } else {
                            // Construct array of tokens
                            let tokens = [];
                            results.rows.forEach((row) => {
                                tokens.push(row.token);
                            });

                            // Remove current token from request.user.tokens
                            const leftOverTokens = tokens.filter(
                                (token) => token !== request.token
                            );
                            request.user.tokens = leftOverTokens;

                            response
                                .status(204)
                                .send({ message: "Successful sign out." }); // SUCCESS
                        }
                    }
                );
            }
        }
    );
};

// Sign user out of all devices
const signoutAll = (request, response) => {
    // Delete all tokens of the user
    database.query(
        "DELETE FROM tokens WHERE tokens.bearer = $1",
        [request.user.userId],
        (error, deleted) => {
            if (error) {
                // Error while deleting tokens of user
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else {
                // Remove all tokens from request.user.tokens
                request.user.tokens.splice(0, request.user.tokens.length);

                response.status(204).send({ message: "Successful sign out." }); // SUCCESS
            }
        }
    );
};

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

            response.status(200).json(results.rows); // SUCCESS
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

// Updates data of user with given username
const updateUserByUserName = (request, response) => {
    const userName = request.params.userName;
    const { firstName, email } = request.body;

    database.query(
        "UPDATE users SET first_name = $1, email = $2 WHERE user_name = $3",
        [firstName, email, userName],
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
    signup,
    signin,
    signout,
    signoutAll,

    retrieveUsers,
    retrieveUserByUserName,
    retrieveUserNameByUserId,

    updateUserByUserName,
    deleteUserByUserName,
};
