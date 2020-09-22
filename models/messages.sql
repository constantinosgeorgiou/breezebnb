DROP TABLE IF EXISTS messages;

CREATE TABLE messages
(
    message_id UUID DEFAULT uuid_generate_v4 (),
    sender_id UUID REFERENCES users(user_id) NOT NULL,
    receiver_id UUID REFERENCES users(user_id) NOT NULL,
    listing_id UUID REFERENCES listings(listing_id) NOT NULL,
    description CHARACTER VARYING(500),
    created TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    PRIMARY KEY
    (message_id)
);