const database = require("../database/index");

const bookRental = (request, response) => {
    const { bookedby,checkin,checkout,listingid } = request.body;

    database.query(
        "INSERT INTO rentals_reserved ( booked_by,check_in,check_out,listing_id ) VALUES ($1, $2, $3,$4) ",[ bookedby,checkin,checkout,listingid],
        (error, results) => {
            if (error) {
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            } else {
                console.log("query succed");
            }
            response
                .status(200)
                .json(results.rows);
        }
    );
};


const retrieveListings = (request, response) => {
    database.query(
        "SELECT * FROM listings ORDER BY listing_id ASC",
        (error, results) => {
            if (error) {
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            } else {
                console.log("query succed");
            }
            response
                .status(200)
                .json(results.rows);
        }
    );
};


const retrieveListingById = (
    request,
    response
) => {
    console.log("here");
    const { listingId } = request.params;
    console.log(listingId);
    database.query(
        "SELECT * FROM users u,listings l,addresses a,listing_rules lr,listing_space ls,listing_amenities la WHERE l.listing_id = $1 and l.address=a.address_id and l.amenities=la.listing_amenities_id and l.space=ls.listing_space_id and l.rules=lr.listing_rules_id and l.listing_owner=u.user_id",
        [listingId],
        (error, results) => {
            if (error) {
                console.log(error);
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            }
            let listing = {
                id: results.rows[0].listing_id,
                title: results.rows[0].title,
                description:
                    results.rows[0].description,
                propertyType:
                    results.rows[0].property_type,
                guests: results.rows[0].guests,
                cost: results.rows[0].cost,
                minimumBookingDays:
                    results.rows[0]
                        .minimum_booking_days,
                owner:
                    results.rows[0].listing_owner,
                rating: results.rows[0].rating,
                address: {
                    country:
                        results.rows[0].country,
                    state: results.rows[0].state,
                    city: results.rows[0].city,
                    zipCode:
                        results.rows[0].zip_code,
                    streetAddress:
                        results.rows[0]
                            .street_address,
                    apartmentNumber:
                        results.rows[0]
                            .apartment_number,
                },
                amenities: {
                    wifi: results.rows[0].wifi,
                    shampoo:
                        results.rows[0].shampoo,
                    heating:
                        results.rows[0].heating,
                    airConditioning:
                        results.rows[0]
                            .air_conditioning,
                    washer:
                        results.rows[0].washer,
                    dryer: results.rows[0].dryer,
                    breakfast:
                        results.rows[0].breakfast,
                    indoorFireplace:
                        results.rows[0]
                            .indoor_fireplace,
                    hangers:
                        results.rows[0].hangers,
                    iron: results.rows[0].iron,
                    hairDryer:
                        results.rows[0]
                            .hair_dryer,
                    laptopFriendlyWorkspace:
                        results.rows[0]
                            .laptop_friendly_workspace,
                    tv: results.rows[0].tv,
                    crib: results.rows[0].crib,
                    highChair:
                        results.rows[0]
                            .high_chair,
                    selfCheckIn:
                        results.rows[0]
                            .self_check_in,
                    smokeAlarm:
                        results.rows[0]
                            .smoke_alarm,
                    carbonMonoxideAlarm:
                        results.rows[0]
                            .carbon_monoxide_alarm,
                    privateBathroom:
                        results.rows[0]
                            .private_bathroom,
                    beachfront:
                        results.rows[0]
                            .beachfront,
                    waterfront:
                        results.rows[0]
                            .waterfront,
                },
                space: {
                    beds: results.rows[0].beds,
                    bathrooms:
                        results.rows[0].bathrooms,
                    rooms: results.rows[0].rooms,
                    squareMeters:
                        results.rows[0]
                            .square_meters,
                    bedrooms:
                        results.rows[0].bedrooms,
                    livingrooms:
                        results.rows[0]
                            .living_rooms,
                    kitchens:
                        results.rows[0].kitchens,
                },
                rules: {
                    petsAllowed:
                        results.rows[0]
                            .pets_allowed,
                    smokingAllowed:
                        results.rows[0]
                            .smoking_allowed,
                    eventsAllowed:
                        results.rows[0]
                            .events_allowed,
                },
                owner: {
                    id: results.rows[0].user_id,
                    firstName:
                        results.rows[0]
                            .first_name,
                    lastName:
                        results.rows[0].last_name,
                    photo: results.rows[0].photo,
                    joined:
                        results.rows[0].joined_on,
                },
            };

            console.log(listing);

            response.status(200).send({
                listing,
            }); // SUCCESS
        }
    );
};

const createListing = (request, response) => {
    console.log(request.body);
    const { listing } = request.body;

    database.query(
        "INSERT INTO listing_amenities (wifi,shampoo ,heating,air_conditioning ,washer ,dryer ,breakfast ,indoor_fireplace ,hangers ,iron ,hair_dryer ,laptop_friendly_workspace ,tv ,crib ,high_chair,self_check_in ,smoke_alarm,carbon_monoxide_alarm, private_bathroom ,beachfront ,waterfront ) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) RETURNING listing_amenities_id",
        [
            listing.amenities.wifi,
            listing.amenities.shampoo,
            listing.amenities.heating,
            listing.amenities.airConditioning,
            listing.amenities.washer,
            listing.amenities.dryer,
            listing.amenities.breakfast,
            listing.amenities.indoorFireplace,
            listing.amenities.hangers,
            listing.amenities.iron,
            listing.amenities.hairDryer,
            listing.amenities
                .laptopFriendlyWorkspace,
            listing.amenities.tv,
            listing.amenities.crib,
            listing.amenities.highChair,
            listing.amenities.selfCheckIn,
            listing.amenities.smokeAlarm,
            listing.amenities.carbonMonoxideAlarm,
            listing.amenities.privateBathroom,
            listing.amenities.beachfront,
            listing.amenities.waterfront,
        ],
        (error, amenitiesQuery) => {
            console.log();
            if (error) {
                // Error while retrieving user id
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            } else {
                // Store address id to pass as parameter in INSET INTO USERS query
                const listingAmenitiesId =
                    amenitiesQuery.rows[0]
                        .listing_amenities_id;

                // Create new user
                database.query(
                    "INSERT INTO listing_space (beds,bathrooms,rooms,square_meters,bedrooms,living_rooms,kitchens) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING listing_space_id",
                    [
                        listing.space.beds,
                        listing.space.bathrooms,
                        listing.space.rooms,
                        listing.space
                            .squareMeters,
                        listing.space.bedrooms,
                        listing.space.livingRooms,
                        listing.space.kitchens,
                    ],
                    (error, spaceQuery) => {
                        if (error) {
                            console.log(
                                "Error space: " +
                                    error
                            );
                            // Error while retrieving user id
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
                        } else {
                            // Store address id to pass as parameter in INSET INTO USERS query
                            const listingspaceid =
                                spaceQuery.rows[0]
                                    .listing_space_id;

                            // Create new user
                            database.query(
                                "INSERT INTO listing_rules ( pets_allowed,smoking_allowed,events_allowed ) VALUES ($1, $2, $3) RETURNING listing_rules_id",
                                [
                                    listing.rules
                                        .petsAllowed,
                                    listing.rules
                                        .smokingAllowed,
                                    listing.rules
                                        .eventsAllowed,
                                ],
                                (
                                    error,
                                    rulesQuery
                                ) => {
                                    if (error) {
                                        // Error while retrieving user id
                                        response
                                            .status(
                                                error.status ||
                                                    500
                                            )
                                            .json(
                                                {
                                                    error: {
                                                        message:
                                                            error.message,
                                                    },
                                                }
                                            );
                                    } else {
                                        // Store address id to pass as parameter in INSET INTO USERS query
                                        const listingrulesid =
                                            rulesQuery
                                                .rows[0]
                                                .listing_rules_id;

                                        // Create new user
                                        database.query(
                                            "INSERT INTO addresses (country,state,city,zip_code,street_address,apartment_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING address_id",
                                            [
                                                listing
                                                    .address
                                                    .country,
                                                listing
                                                    .address
                                                    .state,
                                                listing
                                                    .address
                                                    .city,
                                                listing
                                                    .address
                                                    .zipCode,
                                                listing
                                                    .address
                                                    .streetAddress,
                                                listing
                                                    .address
                                                    .apartmentNumber,
                                            ],
                                            (
                                                error,
                                                addressQuery
                                            ) => {
                                                if (
                                                    error
                                                ) {
                                                    console.log(
                                                        listingAmenitiesId
                                                    );
                                                    // Error while retrieving user id
                                                    response
                                                        .status(
                                                            error.status ||
                                                                500
                                                        )
                                                        .json(
                                                            {
                                                                error: {
                                                                    message:
                                                                        error.message,
                                                                },
                                                            }
                                                        );
                                                } else {
                                                    // Store address id to pass as parameter in INSET INTO USERS query
                                                    const addressId =
                                                        addressQuery
                                                            .rows[0]
                                                            .address_id;
                                                    // Create new user
                                                    database.query(
                                                        "INSERT INTO listings (title,description,cost,property_type,guests,minimum_booking_days,address ,amenities,space,rules,listing_owner) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11) ",
                                                        [
                                                            listing.title,
                                                            listing.description,
                                                            listing.cost,
                                                            listing.propertyType,
                                                            listing.guests,
                                                            listing.minimumBookingDays,
                                                            addressId,
                                                            listingAmenitiesId,
                                                            listingspaceid,
                                                            listingrulesid,
                                                            listing.owner,
                                                        ]
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

    const { listing } = request.body;

    console.log("update: " + listing);

    database.query(
        "SELECT * FROM listings WHERE listing_id = $1",
        [listingId],
        (error, listingQuery) => {
            if (error) {
                // Error while retrieving user id
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            } else {
                // Store address id to pass as parameter in INSET INTO USERS query
                const addressId =
                    listingQuery.rows[0].address;
                const amenitiesId =
                    listingQuery.rows[0]
                        .amenities;
                const spaeceId =
                    listingQuery.rows[0].space;
                const rulesId =
                    listingQuery.rows[0].rules;
                // Create new user
                database.query(
                    "UPDATE listing_rules SET pets_allowed=$2 ,smoking_allowed = $3,events_allowed=$4 WHERE listing_rules_id = $1",
                    [
                        rulesId,
                        listing.rules.petsAllowed,
                        listing.rules
                            .smokingAllowed,
                        listing.rules
                            .eventsAllowed,
                    ]
                );
                database.query(
                    "UPDATE addresses SET country=$2,state=$3,city=$4,zip_code=$5,street_address=$6,apartment_number=$7 WHERE address_id = $1",
                    [
                        addressId,
                        listing.address.country,
                        listing.address.state,
                        listing.address.city,
                        listing.address.zipCode,
                        listing.address
                            .streetAddress,
                        listing.address
                            .apartmentNumber,
                    ]
                );
                database.query(
                    "UPDATE listing_amenities SET wifi=$2,shampoo=$3 ,heating=$4,air_conditioning=$5 ,washer=$6 ,dryer=$7 ,breakfast=$8 ,indoor_fireplace=$9 ,hangers=$10 ,iron=$11 ,hair_dryer=$12 ,laptop_friendly_workspace=$13 ,tv=$14 ,crib=$15 ,high_chair=$16,self_check_in=$17 ,smoke_alarm=$18,carbon_monoxide_alarm=$19, private_bathroom=$20 ,beachfront=$21 ,waterfront=$22 WHERE listing_amenities_id = $1",
                    [
                        amenitiesId,
                        listing.amenities.wifi,
                        listing.amenities.shampoo,
                        listing.amenities.heating,
                        listing.amenities
                            .airConditioning,
                        listing.amenities.washer,
                        listing.amenities.dryer,
                        listing.amenities
                            .breakfast,
                        listing.amenities
                            .indoorFireplace,
                        listing.amenities.hangers,
                        listing.amenities.iron,
                        listing.amenities
                            .hairDryer,
                        listing.amenities
                            .laptopFriendlyWorkspace,
                        listing.amenities.tv,
                        listing.amenities.crib,
                        listing.amenities
                            .highChair,
                        listing.amenities
                            .selfCheckIn,
                        listing.amenities
                            .smokeAlarm,
                        listing.amenities
                            .carbonMonoxideAlarm,
                        listing.amenities
                            .privateBathroom,
                        listing.amenities
                            .beachfront,
                        listing.amenities
                            .waterfront,
                    ]
                );
                database.query(
                    "UPDATE listing_space SET beds=$2,bathrooms=$3,rooms=$4,square_meters=$5,bedrooms=$6,living_rooms=$7,kitchens=$8 WHERE listing_space_id = $1",
                    [
                        spaeceId,
                        listing.space.beds,
                        listing.space.bathrooms,
                        listing.space.rooms,
                        listing.space
                            .squareMeters,
                        listing.space.bedrooms,
                        listing.space.livingRooms,
                        listing.space.kitchens,
                    ]
                );
                database.query(
                    "UPDATE listings SET title=$2,description=$3,cost=$4,property_type=$5,guests=$6,minimum_booking_days=$7 WHERE listing_id = $1",
                    [
                        listingId,
                        listing.title,
                        listing.description,
                        listing.cost,
                        listing.propertyType,
                        listing.guests,
                        listing.minimumBookingDays,
                    ]
                );
                response.status(200).send();
            }
        }
    );
};

const deleteListing = (request, response) => {
    const { listingId } = request.params;

    database.query(
        "SELECT * FROM listings WHERE listing_id = $1",
        [listingId],
        (error, listingQuery) => {
            if (error) {
                // Error while retrieving user id
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            } else {
                // Store address id to pass as parameter in INSET INTO USERS query
                const addressId =
                    listingQuery.rows[0].address;
                const amenitiesId =
                    listingQuery.rows[0]
                        .amenities;
                const spaeceId =
                    listingQuery.rows[0].space;
                const rulesId =
                    listingQuery.rows[0].rules;
                // Create new user
                database.query(
                    "DELETE FROM listing_rules WHERE listing_rules_id = $1",
                    [rulesId]
                );
                database.query(
                    "DELETE FROM addresses WHERE address_id = $1",
                    [addressId]
                );
                database.query(
                    "DELETE FROM listing_amenities WHERE listing_amenities_id = $1",
                    [amenitiesId]
                );
                database.query(
                    "DELETE FROM listing_space WHERE listing_space_id = $1",
                    [spaeceId]
                );
                database.query(
                    "DELETE FROM listings WHERE listing_id = $1",
                    [listingId]
                );
                response.status(200).send();
            }
        }
    );
};

const SearchForAvailableListings = (
    request,
    response
) => {
    const {
        check_in,
        check_out,
        country,
        state,
        city,
    } = request.body;
    console.log(request.body);
    // Find all reservations and select listings that are not reserved
    // Country is required, State and City optional
    database.query(
        `
        SELECT *
        FROM users u,listings l,addresses a,listing_rules lr,listing_space ls,listing_amenities la
        WHERE
            l.address=a.address_id and l.amenities=la.listing_amenities_id and l.space=ls.listing_space_id and l.rules=lr.listing_rules_id and l.listing_owner=u.user_id and
            l.address = a.address_id 
            AND (
                a.country = $3
                AND (a.state = $4)
                AND (a.city = $5)
            )
            AND LISTING_ID::text NOT IN
            (
            SELECT listing_id
            FROM rentals_reserved
            WHERE 
                (check_in>=$1 AND check_in<=$2)
                OR (check_out>=$1 AND check_out<=$2 )
            )
        `,
        [
            check_in,
            check_out,
            country,
            state,
            city,
        ],
        (error, results) => {
            if (error) {
                console.log(error);
                response
                    .status(error.status || 400)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            }
            let listings = [];
            results.rows.forEach((row) => {
                let listing = {
                    id: row.listing_id,
                    title: row.title,
                    description: row.description,
                    propertyType:
                        row.property_type,
                    guests: row.guests,
                    cost: row.cost,
                    minimumBookingDays:
                        row.minimum_booking_days,
                    owner: row.listing_owner,
                    rating: row.rating,
                    address: {
                        country: row.country,
                        state: row.state,
                        city: row.city,
                        zipCode: row.zip_code,
                        streetAddress:
                            row.street_address,
                        apartmentNumber:
                            row.apartment_number,
                    },
                    amenities: {
                        wifi: row.wifi,
                        shampoo: row.shampoo,
                        heating: row.heating,
                        airConditioning:
                            row.air_conditioning,
                        washer: row.washer,
                        dryer: row.dryer,
                        breakfast: row.breakfast,
                        indoorFireplace:
                            row.indoor_fireplace,
                        hangers: row.hangers,
                        iron: row.iron,
                        hairDryer: row.hair_dryer,
                        laptopFriendlyWorkspace:
                            row.laptop_friendly_workspace,
                        tv: row.tv,
                        crib: row.crib,
                        highChair: row.high_chair,
                        selfCheckIn:
                            row.self_check_in,
                        smokeAlarm:
                            row.smoke_alarm,
                        carbonMonoxideAlarm:
                            row.carbon_monoxide_alarm,
                        privateBathroom:
                            row.private_bathroom,
                        beachfront:
                            row.beachfront,
                        waterfront:
                            row.waterfront,
                    },
                    space: {
                        beds: row.beds,
                        bathrooms: row.bathrooms,
                        rooms: row.rooms,
                        squareMeters:
                            row.square_meters,
                        bedrooms: row.bedrooms,
                        livingRooms:
                            row.living_rooms,
                        kitchen: row.kitchens,
                    },
                    rules: {
                        petsAllowed:
                            row.pets_allowed,
                        smokingAllowed:
                            row.smoking_allowed,
                        eventsAllowed:
                            row.events_allowed,
                    },
                    owner: {
                        id: row.user_id,
                        firstName: row.first_name,
                        lastName: row.last_name,
                        photo: row.photo,
                        joined: row.joined_on,
                    },
                };

                listings.push(listing);
            });

            response.status(200).send({
                listings,
            }); // SUCCESS
        }
    );
};

const retrieveListingOfCertainType = (
    request,
    response
) => {
    const { property_type } = request.params;

    database.query(
        "SELECT * FROM listings WHERE property_type = $1",
        [property_type],
        (error, results) => {
            if (error) {
                console.log(error);
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            }

            response
                .status(200)
                .json(results.rows);
        }
    );
};
const retrieveLocations = (request, response) => {
    database.query(
        "SELECT DISTINCT country, city, state FROM addresses",
        (error, results) => {
            if (error) {
                console.log(error);
                response
                    .status(error.status || 500)
                    .json({
                        error: {
                            message:
                                error.message,
                        },
                    });
            } else {
                let locations = [];

                let id = 0; // id of location
                results.rows.forEach((row) => {
                    let location = {
                        id: id++,
                        country: row.country,
                        state: row.state,
                        city: row.city,
                    };

                    locations.push(location);
                });

                response.status(200).send({
                    locations,
                }); // SUCCESS
            }
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
    bookRental,
};
