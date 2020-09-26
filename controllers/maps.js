const database = require("../database/index");

const createCoordinates = (request, response) => {
    const listing_id = request.params.listing_id;
    const {
        latitude,
        longitude,
    } = request.body;

    database.query(
        "INSERT INTO coordinates (listing_id, latitude, longitude) VALUES ($1, $2, $3)",
        [
            listing_id,
            latitude,
            longitude,
        ],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response.status(201).json(results.rows);
        }
    );
};

const retrieveCoordinates = (request, response) => {
    const listing_id = request.params.listing_id;

    database.query(
        "SELECT * FROM coordinates WHERE listing_id = $1",
        [
            listing_id,
        ],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response.status(201).json(results.rows);
        }
    );
};



module.exports = {
    createCoordinates,
    retrieveCoordinates,
};