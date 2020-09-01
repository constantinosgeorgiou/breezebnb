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
    is_available BOOLEAN,
    picture VARCHAR,
    PRIMARY KEY (listing_id)
    -- can accomodate children: how many
    -- can accomodate adults: how many
    -- rooms: how many
    -- listing_owner UUID REFERENCES users(user_id)
);
