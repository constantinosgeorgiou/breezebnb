const database = require("../database/index");

const createReview = (request, response) => {
    console.log(request.body);
    const {
        user_id,
        listing_id,
        description,
        date,
        rate,
    } = request.body;

    database.query(
        "INSERT INTO reviews (user_id,listing_id, description, date, rating) VALUES ($1, $2, $3, $4, $5)",
        [
            user_id,
            listing_id,
            description,
            date,
            rate,
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
                .send(`Review created with id: ${results.insertId}`);
        }
    );
};

const updateReview = (request, response) => {
    const review_id = request.params.review_id;
    const { description, rating } = request.body;
    database.query(
        "UPDATE reviews SET description = $1, rating = $2 WHERE review_id=$3",
        [description,rating, review_id],
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
    console.log(review_id);
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
            response
                .status(204)
                .send(`User deleted with id: ${review_id}`);
        }
    );
};

// const retrieveReviewByReviewId = (request, response) => {
//     const review_id = request.params.review_id;
//     database.query(
//         "SELECT * FROM reviews WHERE review_id = $1",
//         [review_id],
//         (error, results) => {
//             if (error) {
//                 response.status(error.status || 500).json({
//                     error: {
//                         message: error.message,
//                     },
//                 });
//             }

//             response.status(200).json(results.rows);
//         }
//     );
// };

const retrieveReviewByReviewId = (request, response) => {
    const { review_id } = request.params;
    console.log(review_id);
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



module.exports = {
    createReview,
    updateReview,
    deleteReview,
    retrieveReviewByReviewId,
};
