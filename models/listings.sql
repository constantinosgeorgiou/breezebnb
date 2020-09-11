DROP TABLE IF EXISTS listings;

CREATE TABLE listings
(
    listing_id UUID DEFAULT uuid_generate_v4 (),
    listing_title VARCHAR NOT NULL,
    listing_description VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    property_type PROPERTY_TYPE NOT NULL,
    listing_location VARCHAR NOT NULL,
    rating INTEGER,
    picture VARCHAR,
    listing_owner UUID REFERENCES users(user_id),
    PRIMARY KEY (listing_id)
    -- can accomodate children: how many
    -- can accomodate adults: how many
    -- rooms: how many
    
);
DROP TABLE IF EXISTS Rentals_reserved;

CREATE TABLE Rentals_reserved
(
    listing_id character varying(37) NOT NULL,
    check_in date NOT NULL,
    check_out date NOT NULL,
    PRIMARY KEY (listing_id, check_in, check_out)
)
;