DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id UUID DEFAULT uuid_generate_v4 (),
    user_name VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    -- password hashed using bcrypt
    phone VARCHAR,
    user_role USER_ROLE NOT NULL,
    picture VARCHAR,
    UNIQUE(user_name, email, phone),
    -- user_name, email, phone must be unique
    PRIMARY KEY (user_id)
);
