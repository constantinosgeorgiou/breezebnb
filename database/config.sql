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
-- CREATE TYPES
-- ------------------------------
DROP TYPE IF EXISTS user_role;

-- ------------------------------
-- DROP TABLES
-- ------------------------------
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS listings;

DROP TABLE IF EXISTS reviews;
