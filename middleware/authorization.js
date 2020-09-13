const database = require("../database/index");

const isAdmin = (request, response, next) => {
    const { userId } = request.user; // user.userId was placed here by isAuthenticated middleware

    // User not authenticated
    if (!userId) {
        // Anauthorised request
        response
            .status(401)
            .json({ message: "You are not allowed to do that." });
    } else {
        database.query(
            "SELECT user_role FROM users WHERE user_id = $1",
            [userId],
            (error, results) => {
                if (error) {
                    // Error while retrieving role from user with given id
                    response.status(error.status || 500).json({
                        error: {
                            message: error.message,
                        },
                    });
                } else if (results.rows[0].user_role === "admin") {
                    // User is admin
                    next(); // SUCCESS
                } else {
                    // Anauthorised request
                    response
                        .status(401)
                        .json({ message: "You are not allowed to do that." });
                }
            }
        );
    }
};

module.exports = {
    isAdmin,
};
