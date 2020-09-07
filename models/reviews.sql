DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews
(
    user_id character varying(37) NOT NULL,
    review_id serial NOT NULL,
    rating numeric(1),
    listing_id character varying(37) NOT NULL,
    description character varying(500),
    date date NOT NULL,
    PRIMARY KEY (review_id)
);