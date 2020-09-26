DROP TABLE IF EXISTS addresses;

CREATE TABLE addresses
(
    address_id UUID DEFAULT uuid_generate_v4 (),
    country character varying(60) NOT NULL,
    state character varying(60) NOT NULL,
    city character varying(60) NOT NULL,
    zip_code character varying(10) NOT NULL,
    street_address character varying(120) NOT NULL,
    apartment_number character varying(10) NOT NULL,
    PRIMARY KEY (address_id)
);
