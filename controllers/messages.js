const database = require("../database/index");

const createMessage = (request, response) => {
    console.log(request.body);
    const {
        sender_id,
        receiver_id,
        description,
        time,
        listing_id,
    } = request.body;

    database.query(
        "INSERT INTO messages (sender_id,receiver_id, description, time, listing_id) VALUES ($1, $2, $3, $4, $5)",
        [
            sender_id,
            receiver_id,
            description,
            time,
            listing_id,
        ],
        (error, results) => {
            if (error) {
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            console.log(results);
            response
                .status(201)
                .send(`Review created with id: ${results.insertId}`);
        }
    );
};

const deleteMessageByListingId = (request, response) => {
    const listing_id = request.params.listing_id;
    const {
        sender_id,
    } = request.body;

    database.query(
        "DELETE FROM messages WHERE listing_id = $1 AND sender_id = $2",
        [listing_id,sender_id],
        (error, results) => {
            if (error) {
                response.status(error.status || 400).json({
                    error: {
                        message: error.message,
                    },
                });
            }
            response
                .status(204)
                .send(`Message deleted`);
        }
    );
};
const retrieveListingCoversationBySenderReciver = (request, response) => {
    const { listing_id } = request.params;
    const {
        sender_id,
        receiver_id,
    } = request.body;

    database.query(
         "SELECT * FROM messages WHERE listing_id = $1 and ((sender_id=$2 and receiver_id = $3) or (sender_id=$3 and receiver_id = $2) ) ",
        [listing_id,sender_id,receiver_id],
        (error, results) => {
            if (error) {
                console.log(error);
                response.status(error.status || 500).json({
                    error: {
                        message: error.message,
                    },
                });
            }

            response.status(200).json(results.rows);
        }
    );
};


module.exports = {
    createMessage,
    deleteMessageByListingId,
    retrieveListingCoversationBySenderReciver,
};
