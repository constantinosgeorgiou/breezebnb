DROP TABLE IF EXISTS photos_users;

CREATE TABLE photos_users
(
    photo_id UUID DEFAULT uuid_generate_v4 (),
    user_id UUID REFERENCES users(user_id),
    PRIMARY KEY (photo_id)
);

DROP TABLE IF EXISTS photos_listings;

CREATE TABLE photos_listings
(
    photo_id UUID DEFAULT uuid_generate_v4 (),
    listing_id UUID NOT NULL REFERENCES listings(listing_id),
    PRIMARY KEY (photo_id)
);
