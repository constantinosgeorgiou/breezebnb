DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id UUID DEFAULT uuid_generate_v4 (),
    user_name VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    about VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    -- password hashed using bcrypt
    password VARCHAR NOT NULL,
    phone VARCHAR,
    user_role USER_ROLE NOT NULL,
    photo character VARYING(150),
    approved BOOLEAN DEFAULT FALSE,
    birthday VARCHAR NOT NULL,
    joined_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    address UUID REFERENCES addresses(address_id),
    UNIQUE(user_name, email, phone),
    -- user_name, email, phone must be unique
    PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS tokens;

-- Each user has many JWT tokens
-- Storing the tokens enables a user to be logged in
-- on different devices and once they log out of one device
-- we still want to make sure that they are still logged in on
-- another device that they had logged in.
CREATE TABLE tokens
(
    token VARCHAR NOT NULL,
    bearer UUID NOT NULL REFERENCES users(user_id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (token)
);