DROP TABLE IF EXISTS addresses;

CREATE TABLE addresses
(
    address_id UUID DEFAULT uuid_generate_v4 (),
    country character VARYING(60) NOT NULL,
    state character VARYING(60) NOT NULL,
    city character VARYING(60) NOT NULL,
    zip_code character VARYING(10) NOT NULL,
    street_address character VARYING(120) NOT NULL,
    apartment_number character VARYING(10) NOT NULL,
    PRIMARY KEY (address_id)
);
