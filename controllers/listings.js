const database = require("../database/index");

const retrieveListings = (request, response) => {
    database.query(
        "SELECT * FROM listings ORDER BY listing_id ASC",
        (error, results) => {
            if (error) {
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            else{
                console.log('query succed');
            }
            response.status(200).json(results.rows);
        }
    );
};

const retrieveAvailableListings = (request, response) => {
    database.query(
        "SELECT * FROM listings WHERE is_available = 'yes' ORDER BY listing_id ASC",
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

const retrieveListingById = (request, response) => {
    const { listingId } = request.params;

    database.query(
        "SELECT * FROM listings WHERE listing_id = $1",
        [listingId],
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

const createListing = (request, response) => {
    console.log(request.body);
    const {
        listingTitle,
        listingDescription,
        cost,
        propertyType,
        listingLocation,
        rating,
        isAvailable,
        picture,
    } = request.body;

    database.query(
        "INSERT INTO listings (listing_title, listing_description, cost, property_type, listing_location, rating, is_available, picture) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
        [
            listingTitle,
            listingDescription,
            cost,
            propertyType,
            listingLocation,
            rating,
            isAvailable,
            picture,
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
            console.log(results.rows);
            response.status(201).json(results.rows);
        }
    );
};

const updateListing = (request, response) => {
    const { listingId } = request.params;

    const {
        listingTitle,
        listingDescription,
        cost,
        propertyType,
        listingLocation,
        rating,
        isAvailable,
        picture,
    } = request.body;

    database.query(
        "UPDATE listings SET listing_title = $1, listing_description = $2, cost = $3, property_type = $4, listing_location = $5, rating = $6, is_available = $7, picture = $8 WHERE listing_id = $9",
        [
            listingTitle,
            listingDescription,
            cost,
            propertyType,
            listingLocation,
            rating,
            isAvailable,
            picture,
            listingId,
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
            console.log(results.rows);
            response.status(204).json(results.rows);
        }
    );
};

const deleteListing = (request, response) => {
    const { listingId } = request.params;

    database.query(
        "DELETE FROM listings WHERE listing_id = $1",
        [listingId],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            console.log(results.rows);
            response.status(204).json(results.rows);
        }
    );
};

const SearchForAvailableListings = (request, response) => {
    console.log(request.body);
    const {
        listing_location
    } = request.body;

    database.query(
        "SELECT * FROM listings WHERE listing_location = $1 AND is_available='true'",
        [
            listing_location
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
            console.log(results.rows);
            response.status(200).json(results.rows);
        }
    );
};



module.exports = {
    retrieveListings,
    retrieveAvailableListings,
    retrieveListingById,
    createListing,
    updateListing,
    deleteListing,
    SearchForAvailableListings,
};
