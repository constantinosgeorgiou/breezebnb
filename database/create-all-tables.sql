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

CREATE TABLE users
(
    user_id UUID DEFAULT uuid_generate_v4 (),
    user_name VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    -- password hashed using bcrypt
    password VARCHAR NOT NULL,
    phone VARCHAR,
    user_role USER_ROLE NOT NULL,
    photo character VARYING(150),
    approved BOOLEAN,
    birthday VARCHAR NOT NULL,
    joined_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    address UUID REFERENCES addresses(address_id),
    UNIQUE(user_name, email, phone),
    -- user_name, email, phone must be unique
    PRIMARY KEY (user_id)
);


CREATE TABLE listing_amenities
(
    listing_amenities_id UUID DEFAULT uuid_generate_v4 (),
    wifi BOOLEAN NOT NULL,
    shampoo BOOLEAN NOT NULL,
    heating BOOLEAN NOT NULL,
    air_conditioning BOOLEAN NOT NULL,
    washer BOOLEAN NOT NULL,
    dryer BOOLEAN NOT NULL,
    breakfast BOOLEAN NOT NULL,
    indoor_fireplace BOOLEAN NOT NULL,
    hangers BOOLEAN NOT NULL,
    iron BOOLEAN NOT NULL,
    hair_dryer BOOLEAN NOT NULL,
    laptop_friendly_workspace BOOLEAN NOT NULL,
    tv BOOLEAN NOT NULL,
    crib BOOLEAN NOT NULL,
    high_chair BOOLEAN NOT NULL,
    self_check_in BOOLEAN NOT NULL,
    smoke_alarm BOOLEAN NOT NULL,
    carbon_monoxide_alarm BOOLEAN NOT NULL,
    private_bathroom BOOLEAN NOT NULL,
    beachfront BOOLEAN NOT NULL,
    waterfront BOOLEAN NOT NULL,
    PRIMARY KEY(listing_amenities_id)
);

CREATE TABLE listing_space
(
    listing_space_id UUID DEFAULT uuid_generate_v4 (),
    beds INTEGER,
    bathrooms INTEGER,
    rooms INTEGER,
    square_meters INTEGER,
    bedrooms INTEGER,
    living_rooms INTEGER,
    kitchen BOOLEAN,
    PRIMARY KEY(listing_space_id)
);

CREATE TABLE listing_rules
(
    listing_rules_id UUID DEFAULT uuid_generate_v4 (),
    pets_allowed BOOLEAN NOT NULL,
    smoking_allowed BOOLEAN NOT NULL,
    events_allowed BOOLEAN NOT NULL,
    PRIMARY KEY (listing_rules_id)
);

CREATE TABLE listings
(
    listing_id UUID DEFAULT uuid_generate_v4 (),
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    property_type PROPERTY_TYPE NOT NULL,
    address UUID REFERENCES addresses(address_id),
    amenities UUID REFERENCES listing_amenities(listing_amenities_id),
    space UUID REFERENCES listing_space(listing_space_id),
    rules UUID REFERENCES listing_rules(listing_rules_id),
    rating INTEGER,
    minimum_booking_days INTEGER,
    listing_owner UUID REFERENCES users(user_id),
    PRIMARY KEY (listing_id)
);

CREATE TABLE reviews_users
(
    author UUID NOT NULL REFERENCES users(user_id),
    review_id SERIAL NOT NULL,
    rating NUMERIC(1),
    reviewee UUID NOT NULL REFERENCES users(user_id),
    text character VARYING(500),
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (review_id)
);

CREATE TABLE reviews_listings
(
    author UUID NOT NULL REFERENCES users(user_id),
    review_id SERIAL NOT NULL,
    rating NUMERIC(1),
    listing_id UUID NOT NULL REFERENCES listings(listing_id),
    text character VARYING(500),
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (review_id)
);

CREATE TABLE messages
(
    message_id UUID DEFAULT uuid_generate_v4 (),
    sender_id UUID REFERENCES users(user_id) NOT NULL,
    receiver_id UUID REFERENCES users(user_id) NOT NULL,
    listing_id UUID REFERENCES listings(listing_id) NOT NULL,
    description CHARACTER VARYING(500),
    created TIMESTAMP
    WITHOUT TIME ZONE NOT NULL,
    PRIMARY KEY
    (message_id)
);

    CREATE TABLE photos_listings
    (
        photo_id character VARYING(30) NOT NULL,
        listing_id UUID NOT NULL REFERENCES listings(listing_id),
        secure_url character VARYING(150) NOT NULL,
        PRIMARY KEY (photo_id)
    );

    CREATE TABLE rentals_reserved
    (
        listing_id character VARYING(37) NOT NULL,
        check_in DATE NOT NULL,
        check_out DATE NOT NULL,
        PRIMARY KEY (listing_id, check_in, check_out)
    );


    CREATE TABLE coordinates
    (
        listing_id UUID NOT NULL REFERENCES listings(listing_id),
        latitude DOUBLE precision NOT NULL,
        longitude DOUBLE precision NOT NULL
    );

    CREATE TABLE tokens
    (
        token VARCHAR NOT NULL,
        bearer UUID NOT NULL REFERENCES users(user_id),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        PRIMARY KEY (token)
    );