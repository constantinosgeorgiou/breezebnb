const database = require("../database/index");

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
                next(); // SUCCESS
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
                next(); // SUCCESS
            }
        }
    );
};

// Check for valid role
const isRoleValid = (request, response, next) => {
    const { userRole } = request.body;

    // Check if role exists in database
    database.query(
        "SELECT $1::name = any(enum_range(null::user_role)::name[]) AS answer;",
        // Documentation for query:
        //  - https://www.postgresql.org/docs/current/functions-enum.html
        //  - https://www.postgresql.org/docs/current/functions-comparisons.html#id-1.5.8.28.16
        [userRole],
        (error, results) => {
            if (error) {
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else if (results.rows[0].answer === false) {
                // Role doesn't exist
                response.status(400).json({ message: "Role is not valid" });
            } else {
                // Role exists
                next(); // SUCCESS
            }
        }
    );
};

// Check if given user role is not admin
const isRoleNotAdmin = (request, response, next) => {
    const { userRole } = request.body;

    if (userRole === "admin") {
        // Role is admin

        // Anauthorised request to create an admin user.
        // Administrator profiles are created directly within the database.
        response
            .status(401)
            .json({ message: "You are not allowed to do that." });
    } else {
        // Role is NOT admin
        next(); // SUCCESS
    }
};

module.exports = {
    isUsernameUnique,
    isEmailUnique,
    isRoleValid,
    isRoleNotAdmin,
};
