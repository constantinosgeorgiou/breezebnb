DROP TABLE IF EXISTS Rentals_reserved;

CREATE TABLE Rentals_reserved
(
    listing_id character varying(37) NOT NULL,
    check_in date NOT NULL,
    check_out date NOT NULL,
    PRIMARY KEY (listing_id, check_in, check_out)
);

DROP TABLE IF EXISTS listing_amenities;

CREATE TABLE listing_amenities
(
    listing_amenities_id UUID DEFAULT uuid_generate_v4 (),
    wifi boolean NOT NULL,
    shampoo boolean NOT NULL,
    heating boolean NOT NULL,
    air_conditioning boolean NOT NULL,
    washer boolean NOT NULL,
    dryer boolean NOT NULL,
    breakfast boolean NOT NULL,
    indoor_fireplace boolean NOT NULL,
    hangers boolean NOT NULL,
    iron boolean NOT NULL,
    hair_dryer boolean NOT NULL,
    laptop_friendly_workspace boolean NOT NULL,
    tv boolean NOT NULL,
    crib boolean NOT NULL,
    high_chair boolean NOT NULL,
    self_check_in boolean NOT NULL,
    smoke_alarm boolean NOT NULL,
    carbon_monoxide_alarm boolean NOT NULL,
    private_bathroom boolean NOT NULL,
    beachfront boolean NOT NULL,
    waterfront boolean NOT NULL
);

DROP TABLE IF EXISTS listing_space;

CREATE TABLE listing_space
(
    listing_space_id UUID DEFAULT uuid_generate_v4 (),
    beds integer,
    bathrooms integer,
    rooms integer,
    square_meters integer,
    bedrooms integer,
    living_rooms integer,
    kitchen boolean
);

DROP TABLE IF EXISTS listing_rules;

CREATE TABLE listing_rules
(
    listing_rules_id UUID DEFAULT uuid_generate_v4 (),
    pets_allowed boolean NOT NULL,
    smoking_allowed boolean NOT NULL,
    events_allowed boolean NOT NULL
);


DROP TABLE IF EXISTS listings;

CREATE TABLE listings
(
    listing_id UUID DEFAULT uuid_generate_v4 (),
    listing_title VARCHAR NOT NULL,
    listing_description VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    property_type PROPERTY_TYPE NOT NULL,
    listing_location VARCHAR NOT NULL,
    listing_address UUID REFERENCES addresses(address_id),
    listing_amenities_id UUID REFERENCES listing_amenities(listing_amenities_id),
    listing_space_id UUID REFERENCES listing_space(listing_space_id),
    listing_rules_id UUID REFERENCES listing_rules(listing_rules_id),
    rating INTEGER,
    minimum_booking_days INTEGER,
    listing_owner UUID REFERENCES users(user_id),
    PRIMARY KEY (listing_id)
    -- can accomodate children: how many
    -- can accomodate adults: how many
    -- rooms: how many
    
);
