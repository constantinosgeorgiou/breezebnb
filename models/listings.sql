DROP TABLE IF EXISTS listings;

CREATE TABLE listings
(
    listing_id UUID DEFAULT uuid_generate_v4 (),
    listing_name VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    listing_type VARCHAR NOT NULL,
    listing_location VARCHAR NOT NULL,
    rating INTEGER,
    picture VARCHAR,
    PRIMARY KEY (listing_id),
    listing_owner UUID REFERENCES users(user_id),
);