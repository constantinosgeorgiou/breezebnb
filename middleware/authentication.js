const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const database = require("../database/index");

const isAuthenticated = (request, response, next) => {
    const userName = request.params.userName;
    const token = request.header("Authorization").replace("Bearer ", "");

    if (token) {
        // Verify token
        jwt.verify(token, JWT_SECRET, (error, decoded) => {
            if (error) {
                response.status(401).send({ message: "Unauthorized!" });
            } else {
                // Find all tokens of the user
                database.query(
                    "SELECT * FROM users, tokens WHERE users.user_id = tokens.bearer AND users.user_name = $1",
                    [userName],
                    (error, results) => {
                        if (error) {
                            response.status(error.status || 500).json({
                                error: {
                                    message: error.message,
                                },
                            });
                        } else if (results.rowCount === 0) {
                            // User doesn't exist
                            response
                                .status(404)
                                .send({ message: "User not found." });
                        } else {
                            // Construct array of tokens
                            let tokens = [];
                            results.rows.forEach((row) => {
                                tokens.push(row.token);
                            });

                            // Construct user object from query results
                            const user = {
                                userId: results.rows[0].user_id,
                                userName: results.rows[0].user_name,
                                firstName: results.rows[0].first_name,
                                lastName: results.rows[0].last_name,
                                email: results.rows[0].email,
                                phone: results.rows[0].phone,
                                role: results.rows[0].role,
                                picture: results.rows[0].picture,
                                tokens: tokens,
                            };

                            // Check if token is in tokens array
                            if (tokens.includes(token) === false) {
                                // Provided token does not belong to user
                                response
                                    .status(401)
                                    .send({ message: "Unauthorized token!" });
                            } else {
                                // Attach the user on the request
                                request.user = user;

                                // Attach token on the request
                                request.token = token;

                                next(); // SUCCESS
                            }
                        }
                    }
                );
            }
        });
    } else {
        // Token doesn't exist
        response.status(403).send({ message: "No token provided." });
    }
};

module.exports = {
    isAuthenticated,
};
