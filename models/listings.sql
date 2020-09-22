DROP TABLE IF EXISTS rentals_reserved;

CREATE TABLE rentals_reserved
(
    listing_id character VARYING(37) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    PRIMARY KEY (listing_id, check_in, check_out)
);

DROP TABLE IF EXISTS listing_amenities;

CREATE TABLE listing_amenities
(
    listing_amenities_id UUID DEFAULT uuid_generate_v4 (),
    wifi BOOLEAN NOT NULL,
    shampoo BOOLEAN NOT NULL,
    heating BOOLEAN NOT NULL,
    air_conditioning BOOLEAN NOT NULL,
    washer BOOLEAN NOT NULL,
    dryer BOOLEAN NOT NULL,
    breakfast BOOLEAN NOT NULL,
    indoor_fireplace BOOLEAN NOT NULL,
    hangers BOOLEAN NOT NULL,
    iron BOOLEAN NOT NULL,
    hair_dryer BOOLEAN NOT NULL,
    laptop_friendly_workspace BOOLEAN NOT NULL,
    tv BOOLEAN NOT NULL,
    crib BOOLEAN NOT NULL,
    high_chair BOOLEAN NOT NULL,
    self_check_in BOOLEAN NOT NULL,
    smoke_alarm BOOLEAN NOT NULL,
    carbon_monoxide_alarm BOOLEAN NOT NULL,
    private_bathroom BOOLEAN NOT NULL,
    beachfront BOOLEAN NOT NULL,
    waterfront BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS listing_space;

CREATE TABLE listing_space
(
    listing_space_id UUID DEFAULT uuid_generate_v4 (),
    beds INTEGER,
    bathrooms INTEGER,
    rooms INTEGER,
    square_meters INTEGER,
    bedrooms INTEGER,
    living_rooms INTEGER,
    kitchen BOOLEAN
);

DROP TABLE IF EXISTS listing_rules;

CREATE TABLE listing_rules
(
    listing_rules_id UUID DEFAULT uuid_generate_v4 (),
    pets_allowed BOOLEAN NOT NULL,
    smoking_allowed BOOLEAN NOT NULL,
    events_allowed BOOLEAN NOT NULL
);


DROP TABLE IF EXISTS listings;

CREATE TABLE listings
(
    listing_id UUID DEFAULT uuid_generate_v4 (),
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    property_type PROPERTY_TYPE NOT NULL,
    address UUID REFERENCES addresses(address_id),
    amenities UUID REFERENCES listing_amenities(listing_amenities_id),
    space UUID REFERENCES listing_space(listing_space_id),
    rules UUID REFERENCES listing_rules(listing_rules_id),
    rating INTEGER,
    minimum_booking_days INTEGER,
    listing_owner UUID REFERENCES users(user_id),
    PRIMARY KEY (listing_id)
);
