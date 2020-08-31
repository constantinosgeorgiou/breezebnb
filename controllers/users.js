const database = require("../database/index");

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
            console.log(results);
            response
                .status(201)
                .send(`User added with username: ${results.insertId}`);
        }
    );
};

const updateUserByUserName = (request, response) => {
    const userName = request.params.userName;
    const { name, email } = request.body;

    database.query(
        "UPDATE users SET name = $1, email = $2 WHERE user_name = $3",
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

// const signIn = (request, response) => {
//     const { email, password } = request.body;

//     database.query
// };

module.exports = {
    retrieveUsers,
    retrieveUserByUserName,
    // signIn,
    createUser,
    updateUserByUserName,
    deleteUserByUserName,
};
