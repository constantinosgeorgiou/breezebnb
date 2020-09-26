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

                    id: row.listing_id,
                    title: row.title,
                    description: row.description,
                    propertyType: row.property_type,
                    guests: row.guests,
                    cost:row.cost,
                    minimumBookingDays: row.minimum_booking_days,
                    owner: row.listing_owner,
                    rating: row.rating,
                    address: {
                        country:row.country,
                        state:row.state,
                        city: row.city,
                        zipCode: row.zip_code,
                        streetAddress: row.street_address,
                        apartmentNumber: row.apartment_number,
                    },
                    amenities: {
                        wifi: row.wifi,
                        shampoo: row.shampoo,
                        heating: row.heating,
                        airConditioning: row.air_conditioning,
                        washer: row.washer,
                        dryer: row.dryer,
                        breakfast:row.breakfast,
                        indoorFireplace: row.indoor_fireplace,
                        hangers: row.hangers,
                        iron: row.iron,
                        hairDryer: row.hair_dryer,
                        laptopFriendlyWorkspace: row.laptop_friendly_workspace,
                        tv: row.tv,
                        crib: row.crib,
                        highChair: row.high_chair,
                        selfCheckIn: row.self_check_in,
                        smokeAlarm: row.smoke_alarm,
                        carbonMonoxideAlarm: row.carbon_monoxide_alarm,
                        privateBathroom: row.private_bathroom,
                        beachfront: row.beachfront,
                        waterfront: row.waterfront,
                    },
                    space: {
                        beds: row.beds,
                        bathrooms: row.bathrooms,
                        rooms: row.rooms,
                        squareMeters:row.square_meters,
                        bedrooms: row.bedrooms,
                        livingRooms: row.living_rooms,
                        kitchen: row.kitchens,
                    },
                    rules: {
                        petsAllowed: row.pets_allowed,
                        smokingAllowed: row.smoking_allowed,
                        eventsAllowed: row.events_allowed,
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
                listings
            }); // SUCCESS
        }
    );
};

module.exports = {
    retrieveListingByUserId,
};
