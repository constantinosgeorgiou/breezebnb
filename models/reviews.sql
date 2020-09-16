DROP TABLE IF EXISTS reviews_listings;

CREATE TABLE reviews_listings
(
    author UUID NOT NULL REFERENCES users(user_id),
    review_id serial NOT NULL,
    rating numeric(1), 
    listing_id UUID NOT NULL REFERENCES listings(listing_id),
    text character varying(500), 
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY (review_id)
);


DROP TABLE IF EXISTS reviews_users;

CREATE TABLE reviews_users
(
    author UUID NOT NULL REFERENCES users(user_id),
    review_id serial NOT NULL,
    rating numeric(1), 
    reviewee UUID NOT NULL REFERENCES users(user_id),
    text character varying(500), 
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY (review_id)
);