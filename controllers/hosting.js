const database = require("../database/index");

const retrieveListingByUserId = (request, response) => {
    const { listing_owner } = request.params;

    database.query(
        "SELECT * FROM listings WHERE listing_owner = $1",
        [listing_owner],
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
    retrieveListingByUserId,
};
