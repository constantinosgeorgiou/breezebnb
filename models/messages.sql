DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages
(
    message_id UUID DEFAULT uuid_generate_v4 (),
    sender_id UUID REFERENCES users(user_id) NOT NULL,
    receiver_id UUID REFERENCES users(user_id) NOT NULL,
    listing_id UUID REFERENCES listings(listing_id) NOT NULL,
    description character varying(500),
    time timestamp without time zone NOT NULL,
    PRIMARY KEY (message_id)
);