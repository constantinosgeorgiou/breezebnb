CREATE TABLE coordinates
(
    listing_id UUID NOT NULL REFERENCES listings(listing_id),
    latitude double precision NOT NULL,
    longitude double precision NOT NULL
)