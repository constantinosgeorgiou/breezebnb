const database = require("../database/index");
const { checkout } = require("../routes/listings");

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
            } else {
                console.log("query succed");
            }
            response.status(200).json(results.rows);
        }
    );
};

const retrieveListingById = (request, response) => {
    const { listingId } = request.params;

    database.query(
        "SELECT * FROM listings WHERE listing_id = $1", [listingId],
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

    // database.query(
    //     "INSERT INTO listings (listing_title, listing_description, cost, property_type, listing_location, rating, is_available, picture) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    //     [
    //         listingTitle,
    //         listingDescription,
    //         cost,
    //         propertyType,
    //         listingLocation,
    //         rating,
    //         isAvailable,
    //         picture,
    //     ],
    //     (error, results) => {
    //         if (error) {
    //             console.log(error);
    //             response.status(error.status || 400).json({
    //                 error: {
    //                     message: error.message,
    //                 },
    //             });
    //         }
    //         console.log(results.rows);
    //         response.status(201).json(results.rows);
    //     }
    // );
    database.query(
        "INSERT INTO listing_amenities (wifi,shampoo ,heating,air_conditioning ,washer ,dryer ,breakfast ,indoor_fireplace ,hangers ,iron ,hair_dryer ,laptop_friendly_workspace ,tv ,crib ,high_chair,self_check_in ,smoke_alarm,carbon_monoxide_alarm, private_bathroom ,beachfront ,waterfront ) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) RETURNING listing_amenities_id", [
            amenities.wifi,
            amenities.shampoo,
            amenities.heating,
            amenities.airConditioning,
            amenities.washer,
            amenities.dryer,
            amenities.breakfast,
            amenities.indoorFireplace,
            amenities.hangers,
            amenities.iron,
            amenities.hairDryer,
            amenities.laptopFriendlyWorkspace,
            amenities.tv,
            amenities.crib,
            amenities.highChair,
            amenities.selfCheckIn,
            amenities.smokeAlarm,
            amenities.carbonMonoxideAlarm,
            amenities.privateBathroom,
            amenities.beachfront,
            amenities.waterfront,

        ],
        (error, amenitiesQuery) => {
            if (error) {
                // Error while retrieving user id
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            } else {
                // Store address id to pass as parameter in INSET INTO USERS query
                const listingAmenitiesId = amenitiesQuery.rows[0].listing_amenities_id;

                // Create new user
                database.query(
                    "INSERT INTO listing_space (beds,bathrooms,rooms,square_meters,bedrooms,living_rooms,kitchen) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING listing_space_id", [
                        space.beds,
                        space.bathrooms,
                        space.rooms,
                        space.squareMeters,
                        space.bedrooms,
                        space.livingRooms,
                        space.kitchen,
                    ],
                    (error, spaceQuery) => {
                        if (error) {
                            // Error while retrieving user id
                            response.status(error.status || 500).json({
                                error: {
                                    message: error.message,
                                },
                            });
                        } else {
                            // Store address id to pass as parameter in INSET INTO USERS query
                            const listingspaceid = spaceQuery.rows[0].listing_space_id;

                            // Create new user
                            database.query(
                                "INSERT INTO listing_rules ( pets_allowed,smoking_allowed,events_allowed ) VALUES ($1, $2, $3) RETURNING listing_rules_id", [
                                    rules.petsAllowed,
                                    rules.smokingAllowed,
                                    rules.eventsAllowed,
                                ], (error, rulesQuery) => {
                                    if (error) {
                                        // Error while retrieving user id
                                        response.status(error.status || 500).json({
                                            error: {
                                                message: error.message,
                                            },
                                        });
                                    } else {
                                        // Store address id to pass as parameter in INSET INTO USERS query
                                        const listingrulesid = rulesQuery.rows[0].listing_rules_id;


                                        // Create new user
                                        database.query(
                                            "INSERT INTO addresses (country,state,city,zip_code,street_address,apartment_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING address_id", [
                                                address.country,
                                                address.state,
                                                address.city,
                                                address.zipCode,
                                                address.streetAddress,
                                                address.apartmentNumber,
                                            ], (error, addressQuery) => {
                                                if (error) {
                                                    // Error while retrieving user id
                                                    response.status(error.status || 500).json({
                                                        error: {
                                                            message: error.message,
                                                        },
                                                    });
                                                } else {
                                                    // Store address id to pass as parameter in INSET INTO USERS query
                                                    const addressId = addressQuery.rows[0].address_id;

                                                    // Create new user
                                                    database.query(
                                                        "INSERT INTO listings (title,description,cost,property_type,guests,minimum_booking_days,address ,amenities,space,rules,listing_owner) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11,$12) ", [
                                                            title,
                                                            description,
                                                            cost,
                                                            propertyType,
                                                            guests,
                                                            minimumBookingDays,
                                                            addressId,
                                                            listingAmenitiesId,
                                                            listingspaceid,
                                                            listingrulesid,
                                                            owner,
                                                        ],
                                                    );

                                                }
                                            }
                                        );

                                    }
                                }


                            );

                        }
                    }
                );

            }
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
        "UPDATE listings SET listing_title = $1, listing_description = $2, cost = $3, property_type = $4, listing_location = $5, rating = $6, is_available = $7, picture = $8 WHERE listing_id = $9", [
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
        "DELETE FROM listings WHERE listing_id = $1", [listingId],
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
    const { check_in, check_out, country, state, city } = request.body;

    // Find all reservations and select listings that are not reserved
    // Country is required, State and City optional
    database.query(
        `
        SELECT *
        FROM listings, addresses
        WHERE
            listings.address = addresses.address_id
            AND (
                addresses.country = $3
                AND ($4 IS NULL OR addresses.state = $4)
                AND ($5 IS NULL OR addresses.city = $5)
            )
            AND LISTING_ID::text NOT IN
            (
            SELECT listing_id
            FROM rentals_reserved
            WHERE 
                (check_in>=$1 AND check_in<=$2)
                OR (check_out>=$1 AND check_out<=$2 )
            )
        `, [check_in, check_out, country, state, city],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            console.log("results: ", results.rows);
            response.status(200).json(results.rows);
        }
    );
};

const retrieveListingOfCertainType = (request, response) => {
    const { property_type } = request.params;

    database.query(
        "SELECT * FROM listings WHERE property_type = $1", [property_type],
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
const retrieveLocations = (request, response) => {
    database.query(
        "SELECT DISTINCT country,city, state FROM addresses",
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
    retrieveListings,
    retrieveListingById,
    createListing,
    updateListing,
    deleteListing,
    SearchForAvailableListings,
    retrieveListingOfCertainType,
    retrieveLocations,
};