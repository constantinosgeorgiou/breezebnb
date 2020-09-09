const database = require("../database/index");

const createMessage = (request, response) => {
    console.log(request.body);
    const {
        sender_id,
        receiver_id,
        description,
        date,
        subject,
    } = request.body;

    database.query(
        "INSERT INTO messages (sender_id,receiver_id, description, date, subject) VALUES ($1, $2, $3, $4, $5)",
        [
            sender_id,
            receiver_id,
            description,
            date,
            subject,
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

module.exports = {
    createMessage,
};
