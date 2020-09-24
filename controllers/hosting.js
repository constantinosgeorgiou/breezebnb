const database = require("../database/index");

const retrieveListingByUserId = (request, response) => {
    const { listing_owner } = request.params;

    database.query(
        "SELECT * FROM listings l,addresses a,listing_rules lr,listing_space ls,listing_amenities la WHERE l.listing_owner = $1 and l.address=a.address_id and l.amenities=la.listing_amenities_id and l.space=ls.listing_space_id and l.rules=lr.listing_rules_id",
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
