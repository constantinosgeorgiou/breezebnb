import { index as database } from "../database";

// Check for duplicate usernames
const isUsernameUnique = (request, response, next) => {
    const { userName } = request.body;

    database.query(
        "SELECT user_id FROM users WHERE user_name = $1",
        [userName],
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
                // Username already in use
                response.status(200).json({
                    response: {
                        message: "Username already in use",
                    },
                });
            } else {
                // Unique username
                next();
            }
        }
    );
};

// Check for duplicate emails
const isEmailUnique = (request, response, next) => {
    const { email } = request.body;

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
                // Unique email
                next();
            }
        }
    );
};

export default {
    isUsernameUnique,
    isEmailUnique,
};
