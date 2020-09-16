DROP TABLE IF EXISTS photos_listings;

CREATE TABLE photos_listings
(
    photo_id character varying(30) NOT NULL,
    listing_id UUID NOT NULL REFERENCES listings(listing_id),
    secure_url character varying(150) NOT NULL,
    PRIMARY KEY (photo_id)
);
