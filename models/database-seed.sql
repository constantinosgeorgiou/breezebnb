INSERT INTO users
    (user_name, first_name, last_name, email, password, phone, user_role, picture)
VALUES
    ('johndoe',
        'John',
        'Doe',
        'john@doe',
        'jdpassword',
        '123456789',
        'guest',
        'no picture'
),
    ('janedoe', 'Jane', 'Doe', 'jan e@doe.com', 'jdpassword', '123456789', 'host', 'no picture');

UPDATE users SET email = 'john@doe.com' WHERE user_name = 'johndoe';