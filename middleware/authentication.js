const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const database = require("../database/index");

const isAuthenticated = (
    request,
    response,
    next
) => {
    const { userName } = request.params;
    console.log("isAuthenticated: ", userName);
    const token = request
        .header("Authorization")
        .replace("Bearer ", "");


    if (token) {
        // Verify token
        jwt.verify(
            token,
            JWT_SECRET,
            (error, decoded) => {
                if (error) {
                    response
                        .status(401)
                        .send({
                            message:
                                "Unauthorized!",
                        });
                } else {
                    // Find all tokens of the user
                    database.query(
                        `
                    SELECT
                        user_id, user_name, first_name, last_name, about, email, phone, user_role, photo, approved,
                        birthday, joined_on, country, state, city, zip_code, street_address, apartment_number, token
                    FROM users, tokens, addresses
                    WHERE 
                        users.user_id = tokens.bearer
                        AND users.address = addresses.address_id
                        AND users.user_name = $1`,
                        [userName],
                        (error, results) => {
                            if (error) {
                                response
                                    .status(
                                        error.status ||
                                            500
                                    )
                                    .json({
                                        error: {
                                            message:
                                                error.message,
                                        },
                                    });
                            } else if (
                                results.rowCount ===
                                0
                            ) {
                                // User doesn't exist
                                response
                                    .status(404)
                                    .send({
                                        message:
                                            "User not found.",
                                    });
                            } else {
                                // Construct array of tokens
                                let tokens = [];
                                results.rows.forEach(
                                    (row) => {
                                        tokens.push(
                                            row.token
                                        );
                                    }
                                );

                                // Construct user object from query results
                                const user = {
                                    id:
                                        results
                                            .rows[0]
                                            .user_id,
                                    userName:
                                        results
                                            .rows[0]
                                            .user_name,
                                    firstName:
                                        results
                                            .rows[0]
                                            .first_name,
                                    lastName:
                                        results
                                            .rows[0]
                                            .last_name,
                                    about:
                                        results
                                            .rows[0]
                                            .about,
                                    email:
                                        results
                                            .rows[0]
                                            .email,
                                    phone:
                                        results
                                            .rows[0]
                                            .phone,
                                    userRole:
                                        results
                                            .rows[0]
                                            .user_role,
                                    photo:
                                        results
                                            .rows[0]
                                            .photo,
                                    approved:
                                        results
                                            .rows[0]
                                            .birthday,
                                    joined:
                                        results
                                            .rows[0]
                                            .joined_on,
                                    address: {
                                        country:
                                            results
                                                .rows[0]
                                                .country,
                                        state:
                                            results
                                                .rows[0]
                                                .state,
                                        city:
                                            results
                                                .rows[0]
                                                .city,
                                        zipCode:
                                            results
                                                .rows[0]
                                                .zip_code,
                                        streetAddress:
                                            results
                                                .rows[0]
                                                .street_address,
                                        apartmentNumber:
                                            results
                                                .rows[0]
                                                .apartment_number,
                                    },
                                    tokens: tokens,
                                };

                                // Check if token is in tokens array
                                if (
                                    tokens.includes(
                                        token
                                    ) === false
                                ) {
                                    // Provided token does not belong to user
                                    response
                                        .status(
                                            401
                                        )
                                        .send({
                                            message:
                                                "Unauthorized token!",
                                        });
                                } else {
                                    // Attach the user on the request
                                    request.user = user;

                                    // Attach token on the request
                                    request.token = token;
                                    console.log(
                                        "auth next"
                                    );
                                    next(); // SUCCESS
                                }
                            }
                        }
                    );
                }
            }
        );
    } else {
        // Token doesn't exist
        response
            .status(403)
            .send({
                message: "No token provided.",
            });
    }
};

module.exports = {
    isAuthenticated,
};
