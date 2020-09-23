const database = require("../database/index");

const createReview = (request, response) => {
    const { user_id, listing_id, description, date, rate } = request.body;

    database.query(
        "INSERT INTO reviews (user_id,listing_id, description, date, rating) VALUES ($1, $2, $3, $4, $5)",
        [user_id, listing_id, description, date, rate],
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
                .send(`Review created with id: ${results.insertId}`);
        }
    );
};

const updateReview = (request, response) => {
    const review_id = request.params.review_id;
    const { description, rating } = request.body;
    database.query(
        "UPDATE reviews SET description = $1, rating = $2 WHERE review_id=$3",
        [description, rating, review_id],
        (error, results) => {
            if (error) {
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response.status(204).send(`Review modified with ID:`);
        }
    );
};
const deleteReview = (request, response) => {
    const review_id = request.params.review_id;

    database.query(
        "DELETE FROM reviews WHERE review_id = $1",
        [review_id],
        (error, results) => {
            if (error) {
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response.status(204).send(`User deleted with id: ${review_id}`);
        }
    );
};

const retrieveReviewByReviewId = (request, response) => {
    const { id } = request.params;

    database.query(
        "SELECT * FROM reviews WHERE review_id = $1",
        [review_id],
        (error, results) => {
            if (error) {
                console.log(error);
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

const retrieveReceivedReviews = (request, response) => {
    console.log("retrieve: ", request.params);
    const { userName } = request.params;

    // Retrieve received reviews of user
    database.query(
        `
        SELECT user_id, user_name, first_name, last_name, photo, joined_on, country, state, city, review_id, rating, text, created_on
        FROM users, addresses,
        (
            SELECT reviews_users.*
            FROM users, reviews_users
            WHERE
                reviews_users.reviewee = users.user_id
                AND users.user_name = $1
        ) AS reviewers
        WHERE
            reviewers.author = users.user_id
            AND users.address = addresses.address_id
        `,
        [userName],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else if (results.rowCount === 0) {
                // No reviews found
                response.status(200).send({ reviews: [] });
            } else {
                // Construct reviews array
                let reviews = [];
                results.rows.forEach((row) => {
                    reviews.push({
                        id: row.review_id,
                        rating: row.rating,
                        text: row.text,
                        created: row.created_on,
                        author: {
                            id: row.user_id,
                            userName: row.user_name,
                            firstName: row.firstName,
                            lastName: row.last_name,
                            photo: row.photo,
                            joined: row.joined_on,
                            address: {
                                country: row.country,
                                state: row.state,
                                city: row.city,
                            },
                        },
                    });
                });

                response.status(200).send({ reviews });
            }
        }
    );
};

module.exports = {
    createReview,
    updateReview,
    deleteReview,
    retrieveReviewByReviewId,
    retrieveReceivedReviews,
};
