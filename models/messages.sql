DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages
(
    message_id serial NOT NULL,
    sender_id character varying(37) NOT NULL,
    receiver_id character varying(37) NOT NULL,
    description character varying(500),
    date date NOT NULL,
    subject character varying(50),
    PRIMARY KEY (message_id)
);