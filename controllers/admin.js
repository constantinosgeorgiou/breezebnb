const database = require("../database/index");
const bcrypt = require("bcrypt"); // Used to hash and compare passwords of users
const jwt = require("jsonwebtoken"); // Used to generate jwt token
const JWT_SECRET = process.env.JWT_SECRET; // Used to generate jwt token


// Sign in user
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
                            // Password is invalid

                            response.status(401).send({
                                accessToken: null,
                                message: "Password is invalid.",
                            });
                        } else {
                            // Password is valid

                            // Construct the payload
                            const payload = { id: user.user_id };

                            // Generate an authentication token
                            const token = jwt.sign(payload, JWT_SECRET, {
                                expiresIn: "8h",
                            });

                            // Store token into database
                            database.query(
                                "INSERT INTO tokens VALUES ($1, $2)",
                                [token, user.user_id],
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
                                            token: token,
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


module.exports = {
    signin,
    signout,
    signoutAll,
};
