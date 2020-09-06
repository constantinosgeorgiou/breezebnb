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
-- DROP DATABASE IF EXISTS breezebnb;
--
-- CREATE DATABASE breezebnb
-- OWNER breezebnb;
-- ------------------------------
-- EXTENSIONS
-- ------------------------------
CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";
-- ------------------------------
-- EUROPEAN DATE FORMAT
-- ------------------------------
SET DateStyle TO European;
-- ------------------------------
-- CREATE TYPES
-- ------------------------------
DROP TYPE IF EXISTS user_role;
DROP TYPE IF EXISTS property_type;

-- ------------------------------
-- CREATE TYPES
-- ------------------------------
CREATE TYPE USER_ROLE AS ENUM
(
    'admin',
    'guest',
    'host',
    'ghost' -- guest AND host
);

CREATE TYPE PROPERTY_TYPE AS ENUM
(
    'House',
    'Apartment',
    'Bed and Breakfast',
    'Hostel',
    'Hotel',
    'Villa'
);