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
DROP DATABASE IF EXISTS breezebnb;
--
CREATE DATABASE breezebnb OWNER breezebnb;
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
-- CREATE TYPES
-- ------------------------------
CREATE TYPE user_role AS ENUM
(
    'admin',
    'guest',
    'host',
    'ghost' -- guest AND host
);
