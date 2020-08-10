-- Naming conventions:
--
--    +---------------------+------------------------------+
--    | SQL keywords        |  UPPER CASE                  |
--    | name (identifiers)  |  lower_case_with_underscores |
--    +---------------------+------------------------------+
--
-- Sources:
-- https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS
-- https://stackoverflow.com/a/25859628/8049261
--
--
-- ------------------------------
-- EXTENSIONS
-- ------------------------------
CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";

-- ------------------------------
-- CREATE TYPES
-- ------------------------------
DROP TYPE IF EXISTS user_role;

-- ------------------------------
-- DROP TABLES
-- ------------------------------
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS listings;

DROP TABLE IF EXISTS reviews;

-- ------------------------------
-- CREATE TYPES
-- ------------------------------
CREATE TYPE user_role AS ENUM
(
    'admin',
    'guest',
    'host',
    'ghost' -- guest AND host
);

-- ------------------------------
-- CREATE TABLES
-- ------------------------------
CREATE TABLE users
(
    user_id UUID DEFAULT uuid_generate_v4 (),
    user_name VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    phone VARCHAR,
    user_role USER_ROLE NOT NULL,
    picture VARCHAR,
    PRIMARY KEY (user_id)
);

CREATE TABLE listings
(
    listing_id UUID DEFAULT uuid_generate_v4 (),
    listing_name VARCHAR NOT NULL,
    cost VARCHAR NOT NULL,
    listing_type VARCHAR NOT NULL,
    listing_location VARCHAR NOT NULL,
    picture VARCHAR
);

CREATE TABLE user_has_listings
(
    listing_owner UUID REFERENCES users(user_id)
);
