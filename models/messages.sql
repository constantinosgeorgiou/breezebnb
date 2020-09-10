DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages
(
    message_id serial NOT NULL,
    sender_id character varying(37) NOT NULL,
    receiver_id character varying(37) NOT NULL,
    listing_id character varying(37) NOT NULL,
    description character varying(500),
    time timestamp without time zone NOT NULL,
    PRIMARY KEY (message_id)
);