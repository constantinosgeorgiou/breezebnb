const database = require("../database/index");

const retrieveListingByUserId = (request, response) => {
    const { listing_owner } = request.params;

    database.query(
        "SELECT * FROM users u,listings l,addresses a,listing_rules lr,listing_space ls,listing_amenities la WHERE l.listing_owner = $1 and l.address=a.address_id and l.amenities=la.listing_amenities_id and l.space=ls.listing_space_id and l.rules=lr.listing_rules_id and l.listing_owner=u.user_id",
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
            let listings = [];
            results.rows.forEach((row) => {
                let listing = {

                    id: results.rows[0].listing_id,
                    title: results.rows[0].title,
                    description: results.rows[0].description,
                    propertyType: results.rows[0].property_type,
                    guests: results.rows[0].guests,
                    cost:results.rows[0].cost,
                    minimumBookingDays: results.rows[0].minimum_booking_days,
                    owner: results.rows[0].listing_owner,
                    rating: results.rows[0].rating,
                    address: {
                        country:results.rows[0].country,
                        state:results.rows[0].state,
                        city: results.rows[0].city,
                        zipCode: results.rows[0].zip_code,
                        streetAddress: results.rows[0].street_address,
                        apartmentNumber: results.rows[0].apartment_number,
                    },
                    amenities: {
                        wifi: results.rows[0].wifi,
                        shampoo: results.rows[0].shampoo,
                        heating: results.rows[0].heating,
                        airConditioning: results.rows[0].air_conditioning,
                        washer: results.rows[0].washer,
                        dryer: results.rows[0].dryer,
                        breakfast:results.rows[0].breakfast,
                        indoorFireplace: results.rows[0].indoor_fireplace,
                        hangers: results.rows[0].hangers,
                        iron: results.rows[0].iron,
                        hairDryer: results.rows[0].hair_dryer,
                        laptopFriendlyWorkspace: results.rows[0].laptop_friendly_workspace,
                        tv: results.rows[0].tv,
                        crib: results.rows[0].crib,
                        highChair: results.rows[0].high_chair,
                        selfCheckIn: results.rows[0].self_check_in,
                        smokeAlarm: results.rows[0].smoke_alarm,
                        carbonMonoxideAlarm: results.rows[0].carbon_monoxide_alarm,
                        privateBathroom: results.rows[0].private_bathroom,
                        beachfront: results.rows[0].beachfront,
                        waterfront: results.rows[0].waterfront,
                    },
                    space: {
                        beds: results.rows[0].beds,
                        bathrooms: results.rows[0].bathrooms,
                        rooms: results.rows[0].rooms,
                        squareMeters:results.rows[0].square_meters,
                        bedrooms: results.rows[0].bedrooms,
                        livingRooms: results.rows[0].living_rooms,
                        kitchen: results.rows[0].kitchens,
                    },
                    rules: {
                        petsAllowed: results.rows[0].pets_allowed,
                        smokingAllowed: results.rows[0].smoking_allowed,
                        eventsAllowed: results.rows[0].events_allowed,
                    },
                    owner: {
                        id: results.rows[0].user_id,
                        firstName: results.rows[0].first_name,
                        lastName: results.rows[0].last_name,
                        photo: results.rows[0].photo,
                        joined: results.rows[0].joined_on,
                    },
                };
    
                listings.push(listing);
            });


            
            response.status(200).send({
                listings
            }); // SUCCESS
        }
    );
};

module.exports = {
    retrieveListingByUserId,
};
